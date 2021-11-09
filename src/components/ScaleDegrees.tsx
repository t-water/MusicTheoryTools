import React, { useState, useEffect } from 'react';
import { useGetNoteSequence } from '../hooks/useGetNoteSequence';
import { Note, NotesArr } from '../types/Note';
import { ScalesObj } from '../types/Scale';
import { ChoiceGroup, CommandBar, DefaultButton, IChoiceGroupOption, ICommandBarItemProps, Panel } from '@fluentui/react';
import { useBoolean } from '@fluentui/react-hooks';
import useScoring from '../hooks/useScoring';


const {Major} = ScalesObj;

interface IScaleDegreesProps{
}

const getRandomScaleDegree = (): number => {
    return Math.floor(Math.random() * 6) + 2;
}

const notesChoiceGroupOptions: IChoiceGroupOption[] = NotesArr.map((note) => (
    { key: note.DistanceFromC.toString(), text: note.Name }
));

const incorrectGuesses: Set<Note> = new Set();

const ScaleDegrees = (props: IScaleDegreesProps) => { 
    const [scaleDegree, setScaleDegree] = useState<number>(() => getRandomScaleDegree());
    const [previousScaleDegree, setPreviousScaleDegree] = useState<number>(-1);
    const [selectedScale, setSelectedScale] = useState<Note>(NotesArr[0]);
    const [panelIsOpen, {setFalse: closePanel, setTrue: openPanel}] = useBoolean(false);
    const {numberCorrect, total, incrementCorrect, incrementIncorrect } = useScoring();
    
    const getNoteSequence = useGetNoteSequence();
    const currentScale = getNoteSequence(selectedScale, Major);

    useEffect(() => {
        setPreviousScaleDegree(scaleDegree);
    }, [scaleDegree]);

    const generateNewScaleDegree = () => {
        let degreeInUse = scaleDegree;

        while (degreeInUse === previousScaleDegree) {
            degreeInUse = getRandomScaleDegree();
        }

        setScaleDegree(degreeInUse);
    }

    const onClickScaleChoice = (e?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }

        if (option) {
            const distanceFromC: number = parseInt(option.key);
            const selectedNote: Note = NotesArr.filter((note: Note) => note.DistanceFromC === distanceFromC)[0];
            
            setSelectedScale(selectedNote);
            setScaleDegree(getRandomScaleDegree());
        }
    }

    const executeCorrectGuess = () => {
        incrementCorrect();
        incorrectGuesses.clear();
        generateNewScaleDegree();
    }

    const executeIncorrectGuess = (guess: Note) => {
        incorrectGuesses.add(guess);
        incrementIncorrect();
    }

    const onClickGuessButton = (e: React.MouseEvent<HTMLButtonElement>, guess: Note) => {
        e.preventDefault();

        const correctNote = currentScale[scaleDegree - 1];

        if (correctNote.DistanceFromC === guess.DistanceFromC) {
            executeCorrectGuess()
        } else {
            executeIncorrectGuess(guess);
        }
    }

    const guessNoteButtons = NotesArr.map((note: Note) => {
        const noteHasBeenGuessIncorrectly: boolean = incorrectGuesses.has(note);

        let buttonStyle: React.CSSProperties = {};

        if (noteHasBeenGuessIncorrectly || note.IsAccidental) {
            buttonStyle.color = 'white';

            buttonStyle.backgroundColor = noteHasBeenGuessIncorrectly ? 'red' : 'black';
        } 

        return (
            <DefaultButton
                disabled = {noteHasBeenGuessIncorrectly}
                style = {{marginRight: '5px', ...buttonStyle}}
                onClick = {(e: React.MouseEvent<HTMLButtonElement>) => onClickGuessButton(e, note)}
                key = {note.DistanceFromC}
            >
                {note.Abbreviation}
            </DefaultButton>
        )
    });

    const farCommandBarItems: ICommandBarItemProps[] = [
        {
            key: 'Open Scale Picker',
            text: 'Select Key',
            iconProps: { iconName: 'Settings' },
            onClick: openPanel,
        },
    ]

    const scorePrintOut: string = `${numberCorrect} / ${total}`

    return (
        <>
            <CommandBar
              items={[]}
              farItems={farCommandBarItems}
              ariaLabel="Use left and right arrow keys to navigate between commands"
              style = {{backgroundColor: 'lightgray'}}
            />
            <div style = {{fontSize: '20px', textAlign: 'center'}}>
                <div>{scorePrintOut}</div>
                <div>Selected Key: <strong>{selectedScale.Name}</strong></div>
                <div>Scale Degree: <strong>{scaleDegree}</strong></div>
            </div>
            

            <div style = {{marginTop: '10px'}}>
                {guessNoteButtons}
            </div>

            <Panel
                isOpen={panelIsOpen}
                isLightDismiss
                isHiddenOnDismiss
                hasCloseButton
                closeButtonAriaLabel='Close Scale Selection Panel'
                onDismiss={closePanel}
            >
                <ChoiceGroup 
                    options={notesChoiceGroupOptions}
                    defaultSelectedKey={notesChoiceGroupOptions[0].key}
                    onChange={onClickScaleChoice}
                />
            </Panel>
        </>
     )
}

export default ScaleDegrees;