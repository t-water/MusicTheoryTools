import { useCallback } from "react";
import { Note } from "../types/Note";
import { useGetNoteSequence } from "./useGetNoteSequence";
import useGetRandomNote from "./useGetRandomNote";

type GetRandomChord = () => Note[];

const useGetRandomChord = () => { 
    // const getChordNotes = useGetNoteSequence();
    // const getRandomNote = useGetRandomNote();

    // return useCallback(() => {
    //     const randomNote = getRandomNote();

    //     return getChordNotes(randomNote, );
    // }, []);
}

export default useGetRandomChord;