import { Interval } from "../types/Interval";
import { Note } from "../types/Note";
import useGetIntervalNote from "./useGetIntervalNote";

export const useGetNoteSequence = () => {
    const {getAscending} = useGetIntervalNote();

    return (startingNote: Note, scaleIntervals: Interval[]): Note[] => {
        let notes = [startingNote];

        scaleIntervals.forEach((interval: Interval, i: number) => {
            notes.push(getAscending(notes[i], interval));
        })

        return notes;
    };
}