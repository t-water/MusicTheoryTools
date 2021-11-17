import { CommandBar, DefaultButton, ICommandBarItemProps, Panel, Toggle } from '@fluentui/react';
import { useBoolean } from '@fluentui/react-hooks';
import React, { useState } from 'react';
import useGetIntervalNote from '../hooks/useGetIntervalNote';
import useGetRandomNote from '../hooks/useGetRandomNote';
import useScoring from '../hooks/useScoring';
import { getSettingsCommandBarItem } from '../types/CommonElements';
import { IIntervalBooleans, Interval, intervalObj, intervalBooleansFalse, intervalBooleansTrue } from '../types/Interval';
import { Note } from '../types/Note';

interface IIntervalTrainingProps{}

const incorrectGuesses: Set<Interval> = new Set();

const IntervalTraining = (props: IIntervalTrainingProps) => { 
    const getRandomNote = useGetRandomNote();
    const [startingNote, setStartingNote] = useState<Note>(getRandomNote());
    const [endingNote, setEndingNote] = useState<Note>(getRandomNote());
    const [panelIsOpen, {setFalse: closePanel, setTrue: openPanel}] = useBoolean(false);
    const [selectedIntervals, setSelectedIntervals] = useState<IIntervalBooleans>({...intervalBooleansTrue});
    const { getAscending } = useGetIntervalNote();
    const { incrementCorrect, incrementIncorrect, scorePrintOut, percentPrintOut } = useScoring();

    const onClickIntervalButton = (e: React.MouseEvent<HTMLButtonElement>, interval: Interval) => {
        e.preventDefault();

        if (getAscending(startingNote, interval).DistanceFromC === endingNote.DistanceFromC) {
            incorrectGuesses.clear();
            incrementCorrect();
            setStartingNote(getRandomNote());
            setEndingNote(getRandomNote());
        } else {
            incrementIncorrect();
            incorrectGuesses.add(interval);
        }
    }

    const intervalButtons: JSX.Element[] = Object.entries(intervalObj).map(([propName, interval]) => {
        if ((selectedIntervals as any)[propName]) {
            const intervalButtonStyle: React.CSSProperties = incorrectGuesses.has(interval) ? {backgroundColor: 'red', color: 'white'} : {};

            return (
                <div key = {interval.abbreviation}>
                    <DefaultButton
                        onClick = {(e: React.MouseEvent<HTMLButtonElement>) => onClickIntervalButton(e, interval)}
                        style = {{width: '150px', marginBottom: '5px', ...intervalButtonStyle}}
                        disabled = {incorrectGuesses.has(interval)}
                    >
                        {interval.name}
                    </DefaultButton>
                </div>
            );
        } else {
            return <></>;
        }
    });

    const farCommandBarItems: ICommandBarItemProps[] = [getSettingsCommandBarItem('Select Intervals', openPanel)];

    const onChangeIntervalSelector = (propName: string, interval: Interval, checked?: boolean) => {
        const updatedSelectedIntervals: any = {...selectedIntervals};

        if (checked) {
            updatedSelectedIntervals[propName] = true;
        } else {
            updatedSelectedIntervals[propName] = false;
        }
        
        setSelectedIntervals(updatedSelectedIntervals);
    }

    let intervalSelectors: JSX.Element[] = [];

    if (panelIsOpen) {
        intervalSelectors = Object.entries(intervalObj).map(([propName, interval]) => {
            return (
                <Toggle
                    label = {interval.name}
                    onText = 'On'
                    offText = 'Off'
                    checked = {(selectedIntervals as any)[propName]}
                    onChange = {(event: React.MouseEvent<HTMLElement, MouseEvent>, checked?: boolean) => onChangeIntervalSelector(propName, interval, checked)}
                />
            );
        });
    }

    const toggleSelectAllIntervals = (event: React.MouseEvent<HTMLElement, MouseEvent>, checked?: boolean) => {
        if (checked) {
            setSelectedIntervals({...intervalBooleansTrue});
        } else {
            setSelectedIntervals({...intervalBooleansFalse});
        }
    }

    let toggleAllIntervals: JSX.Element = <></>;

    if (panelIsOpen) {
        const reducer = (prev: boolean, curr: boolean) => prev && curr;
        const allIntervalsSelected: boolean = Object.values(selectedIntervals).reduce(reducer, true);
        
        toggleAllIntervals = (
            <Toggle
                label = 'Toggle Select All'
                onText = 'All Selected'
                offText = ''
                checked = {allIntervalsSelected}
                onChange = {toggleSelectAllIntervals}
            />
        )
    }

    return (
        <>
            <CommandBar
                items={[]}
                farItems={farCommandBarItems}
                ariaLabel="Use left and right arrow keys to navigate between commands"
            />

            <div style = {{fontSize: '20px', textAlign: 'center'}}>
                <div>{scorePrintOut} {percentPrintOut}</div>
                <div>
                    <strong>{startingNote.Abbreviation}</strong> {'->'} <strong>{endingNote.Abbreviation}</strong>
                </div>
            </div>

            {intervalButtons}

            <Panel
                isOpen={panelIsOpen}
                isLightDismiss
                isHiddenOnDismiss
                hasCloseButton
                closeButtonAriaLabel='Close Scale Selection Panel'
                onDismiss={closePanel}
            >
                {toggleAllIntervals}

                {intervalSelectors}
            </Panel>
        </>
    )
}

export default IntervalTraining;