import { useCallback } from "react";
import { SEMI_TONES_IN_AN_OCTAVE } from "../types/Constants";
import { IInterval } from "../types/Interval";
import { Note, NotesArr } from "../types/Note";

interface IUseGetIntervalNote{
    getNoteFromDistanceFromC: (distance: number) => Note;
    getAscending: (note: Note, interval: IInterval) => Note;
    getDescending: (note: Note, interval: IInterval) => Note;
}

const useGetIntervalNote = (): IUseGetIntervalNote => { 
    const getNoteFromDistanceFromC = (distance: number): Note => {
        distance %= SEMI_TONES_IN_AN_OCTAVE;

        return NotesArr.filter((note: Note) => note.DistanceFromC === distance)[0];
    }

    const getNoteViaDistance = useCallback((startingNote: Note, distance: number): Note => {
        const newDistance = (startingNote.DistanceFromC + distance) % SEMI_TONES_IN_AN_OCTAVE;

        return getNoteFromDistanceFromC(newDistance);
    }, []);

    const getAscending = useCallback((note: Note, interval: IInterval): Note => {
        return getNoteViaDistance(note, interval.distance);
    }, [getNoteViaDistance]);

    const getDescending = useCallback((note: Note, interval: IInterval): Note => {
        return getNoteViaDistance(note, -interval.distance);
    }, [getNoteViaDistance]);

    return {getNoteFromDistanceFromC, getAscending, getDescending}
}

export default useGetIntervalNote;