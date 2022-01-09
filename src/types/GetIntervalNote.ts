import { SEMI_TONES_IN_AN_OCTAVE } from "./Constants";
import { Interval } from "./Interval";
import { Note, NotesArr } from "./Note";

export const getNoteFromDistanceFromC = (distance: number): Note => {
    distance %= SEMI_TONES_IN_AN_OCTAVE;

    return NotesArr.filter((note: Note) => note.DistanceFromC === distance)[0];
}

const getNoteViaDistance = (startingNote: Note, distance: number): Note => {
    const newDistance = (startingNote.DistanceFromC + SEMI_TONES_IN_AN_OCTAVE + distance) % SEMI_TONES_IN_AN_OCTAVE;

    return getNoteFromDistanceFromC(newDistance);
}

export const getAscending = (note: Note, interval: Interval): Note => {
    return getNoteViaDistance(note, interval.distance);
}

export const getDescending =(note: Note, interval: Interval): Note => {
    return getNoteViaDistance(note, -interval.distance);
}