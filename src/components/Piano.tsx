import React, { useEffect, useState } from 'react';
import useGetRandomChord from '../hooks/useGetRandomChord';
import { Note } from '../types/Note';
import { noteSounds, noteSoundsArr, NoteSoundsName } from '../types/NoteSounds';
import { INoteSound } from '../types/NoteSounds';
import { BlackKey, WhiteKey } from './Key';
import './Piano.css';

interface IPianoProps {
    startingNoteSound: NoteSoundsName;
    endingNoteSound: NoteSoundsName;
}

const Piano = (props: IPianoProps) => { 
    const getRandomChord = useGetRandomChord();

    const getRandomChordNotes = () => {
        return getRandomChord().Notes.map((note: Note) => {
            return note.DistanceFromC;
        });
    }

    const [randomChordNotes, setRandomChordNotes] = useState<number[]>(getRandomChordNotes);

    useEffect(() => {
        console.log('EFFECT CHORD NOTES', randomChordNotes);
    }, [randomChordNotes]);

    const getNoteSoundDistanceFromAZero = (noteSound: NoteSoundsName): number => {
        let noteSoundObject: INoteSound;

        if (typeof noteSound === 'string') {
            noteSoundObject = noteSounds[noteSound];
        } else{
            noteSoundObject = noteSound;
        }

        return noteSoundObject.DistanceFromAZero;
    }

    const whiteKeyWidth: number = 40;
    const whiteKeyBorderThickness: number = 1;
    const whiteKeyWidthWithBorder: number = whiteKeyWidth + whiteKeyBorderThickness * 2;
    
    const blackKeyWidth: number = 25;
    const blackKeyBorderThickness: number = 1;
    const blackKeyWidthWithBorder: number = blackKeyWidth + blackKeyBorderThickness * 2;
    const halfBlackWidth: number = blackKeyWidthWithBorder / 2;

    const startingKeyDistanceFromAZero: number = getNoteSoundDistanceFromAZero(props.startingNoteSound);
    const endingKeyDistanceFromAZero: number = getNoteSoundDistanceFromAZero(props.endingNoteSound);

    const noteSoundsInUse: INoteSound[] = noteSoundsArr.filter((sound: INoteSound) => sound.DistanceFromAZero >= startingKeyDistanceFromAZero && sound.DistanceFromAZero <= endingKeyDistanceFromAZero);
    let currentWidth: number = 0;

    const keys: JSX.Element[] = noteSoundsInUse.map((sound: INoteSound, i: number) => {
        const noteIsSelected: boolean = randomChordNotes.includes(sound.Note.DistanceFromC);

        console.log('RANDOM CHORD NOTES In Loop', randomChordNotes);

        if (!sound.Note.IsAccidental) {
            const whiteKey: JSX.Element = (
                <WhiteKey 
                    key = {i}
                    keyWidth = {whiteKeyWidth}
                    borderThickness = {whiteKeyBorderThickness}
                    left = {currentWidth}
                    noteSound = {sound}                    
                    selected = {noteIsSelected}
                    selectedNotes={[...randomChordNotes]}
                />
            )

            currentWidth += whiteKeyWidthWithBorder;

            return (
                whiteKey
            );
        } else {
            return (
                <BlackKey
                    key = {i}
                    keyWidth = {blackKeyWidth}
                    borderThickness = {blackKeyBorderThickness}
                    left = {currentWidth - halfBlackWidth}
                    noteSound = {sound}
                    selected = {noteIsSelected}
                    selectedNotes={[...randomChordNotes]}
                />
            );
        }
    });

    return (
        <div style = {{margin: '5px 10px', position: 'relative'}}>
            {keys}
        </div>
    )
}

export default Piano;