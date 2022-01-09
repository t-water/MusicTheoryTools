import { useCallback } from "react";
import { Interval } from "../types/Interval";
import { Note } from "../types/Note";
import { getAscending } from "../types/GetIntervalNote";

export const useGetNoteSequence = () => {
    return useCallback((startingNote: Note, scaleIntervals: Interval[]): Note[] => {
        let notes = [startingNote];

        scaleIntervals.forEach((interval: Interval, i: number) => {
            notes.push(getAscending(notes[i], interval));
        })

        return notes;
    }, []);
}