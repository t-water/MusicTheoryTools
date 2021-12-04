import React from 'react';
import useGetRandomChord from '../hooks/useGetRandomChord';
import { Note } from '../types/Note';
import { noteSounds, noteSoundsArr, NoteSoundsName } from '../types/NoteSounds';
import { INoteSound } from '../types/NoteSounds';
import './Piano.css';

interface IKeyProps {
    className: string;
    key: React.Key;
    noteSound: INoteSound;
    style: React.CSSProperties;
}

const Key = (props: IKeyProps) => {
    const keyStyle: React.CSSProperties = {
        borderRadius: '0 0 3% 3%',
        position: 'absolute'
    }

    const playNote = () => {
        props.noteSound.Audio.pause();
        props.noteSound.Audio.currentTime = 0;
        props.noteSound.Audio.play();
    }

    const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.buttons === 1) {
            playNote();
        }
    };

    const onMouseDown = () => {
        playNote();
    }

    return (
        <div 
            className = {props.className}
            key = {props.key} 
            style = {{...keyStyle, ...props.style}} 
            onMouseDown = {onMouseDown} 
            onMouseEnter = {onMouseEnter}
        >
        </div> 
    )
}

interface IBaseKeyProps {
    keyWidth: number;
    borderThickness: number;
    left: number;
    key: React.Key;
    noteSound: INoteSound;
    selected: boolean;
}

interface IWhiteKeyProps extends IBaseKeyProps{
}

const WhiteKey = (props: IWhiteKeyProps) => {
    const whiteKeyWidthHeightRatio: number = 5.626;

    const whiteKeyStyle: React.CSSProperties = {
        border: `${props.borderThickness}px solid black`,
        height: `${props.keyWidth * whiteKeyWidthHeightRatio}px`,
        width: `${props.keyWidth}px`,
        left: `${props.left}px`
    }

    return <Key className = {`white-key ${props.selected ? 'selected' : ''}`} noteSound = {props.noteSound} style = {whiteKeyStyle} key = {props.key}/>
}

interface IBlackKeyProps extends IBaseKeyProps{
}

const BlackKey = (props: IBlackKeyProps) => {
    const blackKeyStyle: React.CSSProperties = {
        border: `${props.borderThickness}px solid black`,
        height: '150px',
        width: `${props.keyWidth}px`,
        left: `${props.left}px`,
        zIndex: 1
    }

    return <Key className = {`black-key ${props.selected ? 'selected' : ''}`} noteSound = {props.noteSound} style = {blackKeyStyle} key = {props.key}/>
}

interface IPianoProps {
    startingNoteSound: NoteSoundsName;
    endingNoteSound: NoteSoundsName;
}

const selectedNotes: Set<Note> = new Set();

const Piano = (props: IPianoProps) => { 
    const getRandomChord = useGetRandomChord();
    const randomChordNotes: Note[] = getRandomChord().Notes;

    selectedNotes.clear();
    randomChordNotes.forEach((note: Note) => selectedNotes.add(note));

    console.log('RANDOM CHORD NOTES: ', randomChordNotes);

    const getNoteSoundDistanceFromAZero = (noteSound: NoteSoundsName): number => {
        let noteSoundObject: INoteSound;

        if (typeof noteSound === 'string') {
            noteSoundObject = noteSounds[noteSound];
        } else{
            noteSoundObject = noteSound;
        }

        return noteSoundObject.DistanceFromAZero;
    }

    const keys: JSX.Element[] = [];

    const whiteKeyWidth: number = 40;
    const whiteKeyBorderThickness: number = 1;
    const whiteKeyWidthWithBorder: number = whiteKeyWidth + whiteKeyBorderThickness * 2;
    
    const blackKeyWidth: number = 25;
    const blackKeyBorderThickness: number = 1;
    const blackKeyWidthWithBorder: number = blackKeyWidth + blackKeyBorderThickness * 2;
    const halfBlackWidth: number = blackKeyWidthWithBorder / 2;

    const startingKeyDistanceFromAZero: number = getNoteSoundDistanceFromAZero(props.startingNoteSound);
    const endingKeyDistanceFromAZero: number = getNoteSoundDistanceFromAZero(props.endingNoteSound);

    let currentWidth: number = 0;

    for (let i=startingKeyDistanceFromAZero; i<=endingKeyDistanceFromAZero; i++) {
        const currentNoteSound: INoteSound = noteSoundsArr.filter((sound: INoteSound) => sound.DistanceFromAZero === i)[0];

        if (!currentNoteSound.Note.IsAccidental) {
            keys.push(
                <WhiteKey 
                    key = {i} 
                    keyWidth = {whiteKeyWidth} 
                    borderThickness = {whiteKeyBorderThickness} 
                    left = {currentWidth} 
                    noteSound = {currentNoteSound}
                    selected = {selectedNotes.has(currentNoteSound.Note)}
                />
            );

            currentWidth += whiteKeyWidthWithBorder;
        } else {
            keys.push(
                <BlackKey
                    key = {i}
                    keyWidth = {blackKeyWidth}
                    borderThickness = {blackKeyBorderThickness}
                    left = {currentWidth - halfBlackWidth}
                    noteSound = {currentNoteSound}
                    selected = {selectedNotes.has(currentNoteSound.Note)}
                />
            );
        }
    }

    return (
        <div style = {{margin: '5px 10px', position: 'relative'}}>
            {keys}
        </div>
    )
}

export default Piano;