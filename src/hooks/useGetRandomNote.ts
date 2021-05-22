import { useCallback } from "react";
import useGetIntervalNote from "./useGetIntervalNote";

const useGetRandomNote = () => { 
    const {getNoteFromDistanceFromC} = useGetIntervalNote();

    return useCallback(() => {
        const randomIndex: number = Math.floor(Math.random() * 12);
        
        return getNoteFromDistanceFromC(randomIndex);
    }, [getNoteFromDistanceFromC]);
}

export default useGetRandomNote;