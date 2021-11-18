import React from 'react';
import { noteSounds } from '../types/NoteSounds';

interface IEarTrainingProps {

}

const EarTraining = (props: IEarTrainingProps) => { 
    const noteAudio: JSX.Element[] = Object.entries(noteSounds).map(([propName, sound]) => {
        return (
            <audio controls>
                <source src = {`https://docs.google.com/uc?export=download&id=${sound.GoogleDriveId}`} type = 'audio/wav'/>
            </audio>
        )
    })

    return (
        <>
            { noteAudio }
        </>
    )
}

export default EarTraining;