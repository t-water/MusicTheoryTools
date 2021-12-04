import { useCallback } from "react";
import { SEMI_TONES_IN_AN_OCTAVE } from "../types/Constants";
import useGetIntervalNote from "./useGetIntervalNote";

const useGetRandomNote = () => { 
    const {getNoteFromDistanceFromC} = useGetIntervalNote();

    return useCallback(() => {
        const randomIndex: number = Math.floor(Math.random() * SEMI_TONES_IN_AN_OCTAVE);
        
        return getNoteFromDistanceFromC(randomIndex);
    }, [getNoteFromDistanceFromC]);
}

export default useGetRandomNote;