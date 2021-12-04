import { useCallback } from "react";
import { Chord } from "../types/Chord";
import { ChordShapeName, ChordShapesObj, getRandomChordShapeName } from "../types/ChordShape";
import { Interval } from "../types/Interval";
import { Note } from "../types/Note";
import { useGetNoteSequence } from "./useGetNoteSequence";
import useGetRandomNote from "./useGetRandomNote";

type GetRandomChord = () => Chord;

const useGetRandomChord = (): GetRandomChord => { 
    const getChordNotes = useGetNoteSequence();
    const getRandomNote = useGetRandomNote();

    return useCallback((): Chord => {
        const randomNote = getRandomNote();
        const randomChordShape: ChordShapeName = getRandomChordShapeName();
        const chordIntervals: Interval[] = ChordShapesObj[randomChordShape];

        const chordNotes: Note[] = getChordNotes(randomNote, chordIntervals);

        return {
            Root: randomNote,
            Notes: chordNotes,
            Shape: randomChordShape
        }
    }, [getRandomNote, getChordNotes]);
}

export default useGetRandomChord;