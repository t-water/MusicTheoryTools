import React from 'react';
import { SEMI_TONES_IN_AN_OCTAVE } from '../types/Constants';
import { INoteSound, MAX_DISTANCE_FROM_MIDDLE_C, MIN_DISTANCE_FROM_MIDDLE_C, noteSoundsArr } from '../types/NoteSounds';

interface IEarTrainingProps {
}

const EarTraining = (props: IEarTrainingProps) => { 
    const maxDistance: number = MAX_DISTANCE_FROM_MIDDLE_C-1;
    const minDistance: number = MIN_DISTANCE_FROM_MIDDLE_C+1;
    const randomNoteDistance: number = Math.floor(Math.random() * (maxDistance - minDistance)) + minDistance;

    const firstNoteSound: INoteSound = noteSoundsArr.filter((noteSound: INoteSound) => noteSound.DistanceFromMiddleC === randomNoteDistance)[0];

    const possibleNoteSounds: INoteSound[] = noteSoundsArr.filter((noteSound: INoteSound) => {
        const noteIsHigherThanFirst: boolean = noteSound.DistanceFromMiddleC > firstNoteSound.DistanceFromMiddleC;
        const noteIsWithinOneOctave: boolean = noteSound.DistanceFromMiddleC <= Math.min(randomNoteDistance + SEMI_TONES_IN_AN_OCTAVE, maxDistance+1);

        return noteIsHigherThanFirst && noteIsWithinOneOctave;
    });

    const secondNoteSoundsIndex: number = Math.floor(Math.random() * possibleNoteSounds.length);

    const secondNoteSound: INoteSound = possibleNoteSounds[secondNoteSoundsIndex];

    const firstNoteAudio: JSX.Element =  (
        <audio controls>
            <source src = {`https://docs.google.com/uc?export=download&id=${firstNoteSound.GoogleDriveId}`} type = 'audio/wav'/>
        </audio>
    )
    
    const secondNoteAudio: JSX.Element =  (
        <audio controls>
            <source src = {`https://docs.google.com/uc?export=download&id=${secondNoteSound.GoogleDriveId}`} type = 'audio/wav'/>
        </audio>
    )

    return (
        <>
            <div>
                <span>{firstNoteSound.Note.Abbreviation}</span>

                { firstNoteAudio }
            </div>

            <div>
                <span>{secondNoteSound.Note.Abbreviation}</span>

                { secondNoteAudio }
            </div>
        </>
    )
}

export default EarTraining;