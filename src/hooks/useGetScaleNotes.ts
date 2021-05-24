import { useCallback } from "react";
import { IInterval } from "../types/Interval";
import { Note } from "../types/Note";
import useGetIntervalNote from "./useGetIntervalNote";

export const useGetScaleNotes = () => {
    const {getAscending} = useGetIntervalNote();

    return useCallback((startingNote: Note, scaleIntervals: IInterval[]): Note[] => {
        let notes = [startingNote];

        scaleIntervals.forEach((interval: IInterval, i: number) => {
            notes.push(getAscending(notes[i], interval));
        })

        return notes;
    }, [getAscending]);
}