import { SEMI_TONES_IN_AN_OCTAVE } from "../types/Constants";
import { IInterval } from "../types/Interval";
import { Note, NotesArr } from "../types/Note";

interface IUseGetIntervalNote{
    getNoteFromDistanceFromC: (distance: number) => Note;
    getAscending: (note: Note, interval: IInterval) => Note;
    getDescending: (note: Note, interval: IInterval) => Note;
}

const getNoteFromDistanceFromC = (distance: number): Note => {
    distance %= SEMI_TONES_IN_AN_OCTAVE;

    return NotesArr.filter((note: Note) => note.DistanceFromC === distance)[0];
}

const getNoteViaDistance = (startingNote: Note, distance: number): Note => {
    const newDistance = (startingNote.DistanceFromC + distance) % SEMI_TONES_IN_AN_OCTAVE;

    return getNoteFromDistanceFromC(newDistance);
}

const getAscending = (note: Note, interval: IInterval): Note => {
    return getNoteViaDistance(note, interval.distance);
}

const getDescending =(note: Note, interval: IInterval): Note => {
    return getNoteViaDistance(note, -interval.distance);
}

const useGetIntervalNote = (): IUseGetIntervalNote => { 
    return {getNoteFromDistanceFromC, getAscending, getDescending}
}

export default useGetIntervalNote;