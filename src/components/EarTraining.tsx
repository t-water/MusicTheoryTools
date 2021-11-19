import React from 'react';
import { INoteSound, noteSounds } from '../types/NoteSounds';

interface IEarTrainingProps {

}

const EarTraining = (props: IEarTrainingProps) => { 
    const noteSoundsPropertyNames: string[] = Object.getOwnPropertyNames(noteSounds);
    const numberOfSounds: number = noteSoundsPropertyNames.length;
    const randomNoteSoundsPropertyName: string = noteSoundsPropertyNames[Math.floor(Math.random() * numberOfSounds)];
    const randomNoteAudio: INoteSound = (noteSounds as any)[randomNoteSoundsPropertyName];
    
    const noteAudio: JSX.Element =  (
        <audio controls>
            <source src = {`https://docs.google.com/uc?export=download&id=${randomNoteAudio.GoogleDriveId}`} type = 'audio/wav'/>
        </audio>
    )

    return (
        <>
            <span>{randomNoteAudio.Note.Abbreviation}</span>

            { noteAudio }
        </>
    )
}

export default EarTraining;