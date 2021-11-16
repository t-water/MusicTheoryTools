import { round } from "mathjs";
import { useCallback, useState } from "react";

export interface IUseScoring{
    numberCorrect: number;
    numberIncorrect: number;
    total: number;
    incrementCorrect: () => void;
    incrementIncorrect: () => void;
    resetScore: () => void;
    scorePrintOut: string;
    percentPrintOut: string;
}

const useScoring = (initialNumberCorrect: number = 0, initialNumberIncorrect: number = 0): IUseScoring => { 
    const [numberCorrect, setNumberCorrect] = useState<number>(initialNumberCorrect);
    const [numberIncorrect, setNumberIncorrect] = useState<number>(initialNumberIncorrect);
    const total: number = numberCorrect + numberIncorrect;

    const incrementCorrect = useCallback(() => {
        setNumberCorrect(prevNumberCorrect => prevNumberCorrect + 1);
    }, []);

    const incrementIncorrect = useCallback(() => {
        setNumberIncorrect(prevNumberIncorrect => prevNumberIncorrect + 1);
    }, [])

    const resetScore = useCallback(() => {
        setNumberCorrect(initialNumberCorrect);
        setNumberIncorrect(initialNumberIncorrect);
    }, [initialNumberCorrect, initialNumberIncorrect]);

    const percentage: number = total > 0 ? round(numberCorrect / total * 100) : 0;

    return {
        numberCorrect: numberCorrect,
        numberIncorrect: numberIncorrect,
        total: total,
        incrementCorrect: incrementCorrect,
        incrementIncorrect: incrementIncorrect,
        resetScore: resetScore,
        scorePrintOut: `${numberCorrect} / ${total}`,
        percentPrintOut: `${percentage} %`
    }
}

export default useScoring;