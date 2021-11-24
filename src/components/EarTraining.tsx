import React from 'react';
import { SEMI_TONES_IN_AN_OCTAVE } from '../types/Constants';
import { INoteSound, MAX_DISTANCE_FROM_MIDDLE_C, MIN_DISTANCE_FROM_MIDDLE_C, noteSoundsArr } from '../types/NoteSounds';

interface IEarTrainingProps {
}

const getAudioElement = (noteSound: INoteSound): HTMLAudioElement => {
    const audio = document.createElement('audio');
    const source = document.createElement('source');

    audio.muted = true;
    audio.autoplay = true;

    source.src = `https://docs.google.com/uc?export=download&id=${noteSound.GoogleDriveId}`;
    source.type = 'audio/wav';

    audio.appendChild(source);

    return audio;
}

const EarTraining = (props: IEarTrainingProps) => { 
    const randomIntervalDistance: number = Math.floor(Math.random() * SEMI_TONES_IN_AN_OCTAVE) + 1;

    const minDistanceFromMiddleC = MIN_DISTANCE_FROM_MIDDLE_C;
    const maxDistanceFromMiddleC = MAX_DISTANCE_FROM_MIDDLE_C - randomIntervalDistance;

    const firstNoteDistance: number = Math.floor(Math.random() * (maxDistanceFromMiddleC - minDistanceFromMiddleC + 1) + minDistanceFromMiddleC);
    const secondNoteDistance: number = firstNoteDistance + randomIntervalDistance;

    const firstNoteSound: INoteSound = noteSoundsArr.filter((noteSound: INoteSound) => noteSound.DistanceFromMiddleC === firstNoteDistance)[0];
    const secondNoteSound: INoteSound = noteSoundsArr.filter((noteSound: INoteSound) => noteSound.DistanceFromMiddleC === secondNoteDistance)[0];

    const firstNoteAudio = getAudioElement(firstNoteSound);
    const secondNoteAudio = getAudioElement(secondNoteSound);

    firstNoteAudio.play();

    setTimeout(() => {
        secondNoteAudio.play();
    }, 1000)

    return (
        <>
        </>
    )
}

export default EarTraining;