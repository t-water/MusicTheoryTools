import { useCallback } from "react";
import { SEMI_TONES_IN_AN_OCTAVE } from "../types/Constants";
import { getNoteFromDistanceFromC } from "../types/GetIntervalNote";

const useGetRandomNote = () => { 
    return useCallback(() => {
        const randomIndex: number = Math.floor(Math.random() * SEMI_TONES_IN_AN_OCTAVE);
        
        return getNoteFromDistanceFromC(randomIndex);
    }, []);
}

export default useGetRandomNote;