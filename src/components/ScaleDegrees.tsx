import React, { useState } from 'react';
import { useEffect } from 'react';
import { useGetNoteSequence } from '../hooks/useGetNoteSequence';
import { Note, NotesArr } from '../types/Note';
import { ScalesObj } from '../types/Scale';

const {Major} = ScalesObj;

interface IScaleDegreesProps{

}

const getRandomScaleDegree = (): number => {
    return Math.floor(Math.random() * 6) + 2;
}

const ScaleDegrees = (props: IScaleDegreesProps) => { 
    const [scaleDegree, setScaleDegree] = useState<number>(() => getRandomScaleDegree());
    const [previousScaleDegree, setPreviousScaleDegree] = useState<number>(-1);
    const [selectedScale, setSelectedScale] = useState<Note>(NotesArr[0]);
    const getNoteSequence = useGetNoteSequence();

    useEffect(() => {
        setPreviousScaleDegree(scaleDegree);
    }, [scaleDegree]);

    const generateNewScaleDegree = () => {
        let degreeInUse = scaleDegree;

        while (degreeInUse === previousScaleDegree) {
            degreeInUse = getRandomScaleDegree();
        }

        setScaleDegree(degreeInUse);
    }

    const onClickScaleButton = (e: React.MouseEvent<HTMLButtonElement>, buttonNote: Note) => {
        e.preventDefault();

        setSelectedScale(buttonNote);
        setScaleDegree(1);
    }

    const onClickGuessButton = (e: React.MouseEvent<HTMLButtonElement>, guess: Note) => {
        e.preventDefault();

        const currentScale = getNoteSequence(selectedScale, Major);
        const correctNote = currentScale[scaleDegree - 1];

        if (correctNote.DistanceFromC === guess.DistanceFromC) {
            generateNewScaleDegree();
        } else {
            alert('Wrong');
        }
    }

    const scaleButtons = NotesArr.map((note: Note) => (
        <button 
            style = {{marginRight: '5px', ...note.DistanceFromC === selectedScale.DistanceFromC ? {backgroundColor: 'yellow'} : {}}}
            onClick = {(e: React.MouseEvent<HTMLButtonElement>) => {onClickScaleButton(e, note)}}
            key = {note.DistanceFromC}
        >
            {note.Abbreviation}
        </button>
    ));

    const guessNoteButtons = NotesArr.map((note: Note) => (
        <button
            style = {{marginRight: '5px'}}
            onClick = {(e: React.MouseEvent<HTMLButtonElement>) => onClickGuessButton(e, note)}
            key = {note.DistanceFromC}
        >
            {note.Abbreviation}
        </button>
    ));

    return (
        <>
            <div style = {{marginBottom: '10px'}}>
                {scaleButtons}
            </div>
            
            <div style = {{marginLeft: '3px'}}>
                {scaleDegree}
            </div>
            

            <div style = {{marginTop: '10px'}}>
                {guessNoteButtons}
            </div>
        </>
    )
}

export default ScaleDegrees;