import { CommandBar, DefaultButton, Dropdown, ICommandBarItemProps, IDropdownOption, Panel, Toggle } from '@fluentui/react';
import { useBoolean } from '@fluentui/react-hooks';
import React, { useState } from 'react';
import useGetIntervalNote from '../hooks/useGetIntervalNote';
import useGetRandomNote from '../hooks/useGetRandomNote';
import useScoring from '../hooks/useScoring';
import { getSettingsCommandBarItem } from '../types/CommonElements';
import { Interval, intervalArr } from '../types/Interval';
import { Note } from '../types/Note';

interface IIntervalTrainingProps{}

const intervalDropdownOptions: IDropdownOption[] = intervalArr.map((interval: Interval) => ({
    key: interval.abbreviation,
    text: interval.name,
    data: interval.distance
}));

const initialSelectedItervalKeys = intervalArr.map((interval: Interval) => interval.abbreviation);

const incorrectGuesses: Set<Interval> = new Set();

const IntervalTraining = (props: IIntervalTrainingProps) => { 
    const getRandomNote = useGetRandomNote();
    const [startingNote, setStartingNote] = useState<Note>(getRandomNote());
    const [endingNote, setEndingNote] = useState<Note>(getRandomNote());
    const [panelIsOpen, {setFalse: closePanel, setTrue: openPanel}] = useBoolean(false);
    const [selectedIntervalKeys, setSelectedIntervalKeys] = useState<string[]>([...initialSelectedItervalKeys]);
    const { getAscending } = useGetIntervalNote();
    const { incrementCorrect, incrementIncorrect, scorePrintOut, percentPrintOut } = useScoring();

    const intervalsInUse: Interval[] = selectedIntervalKeys.map((key: string) => {
        return intervalArr.filter((interval: Interval) => interval.abbreviation === key)[0];
    })

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

    const intervalButtons: JSX.Element[] = intervalsInUse.map((interval: Interval) => {
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
    });

    const farCommandBarItems: ICommandBarItemProps[] = [getSettingsCommandBarItem('Select Intervals', openPanel)];

    const onSelectInterval = (e: React.FormEvent<HTMLDivElement>, option?: IDropdownOption<any>) => {
        const updatedSelectedIntervalOptions = [...selectedIntervalKeys];

        if (option) {
            const selectedKey: string = option.key as string;

            if (option.selected) {
                updatedSelectedIntervalOptions.push(selectedKey);
            } else {
                const itemIndex: number = updatedSelectedIntervalOptions.indexOf(selectedKey);
                updatedSelectedIntervalOptions.splice(itemIndex, 1);
            }
        }

        setSelectedIntervalKeys(updatedSelectedIntervalOptions);
    }

    const toggleSelectAllIntervals = (event: React.MouseEvent<HTMLElement, MouseEvent>, checked?: boolean) => {
        let updatedSelectedIntervalKeys: string[] = [];

        if (checked) {
            updatedSelectedIntervalKeys = [...initialSelectedItervalKeys];
        } 

        setSelectedIntervalKeys(updatedSelectedIntervalKeys);
    }

    let intervalToggle: JSX.Element = <></>;

    if (panelIsOpen) {
        intervalToggle = (
            <Toggle
                label = 'Toggle Select All'
                onText = 'All Selected'
                offText = ''
                checked = {selectedIntervalKeys.length === intervalArr.length}
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
                {intervalToggle}

                <Dropdown
                    label = 'Intervals'
                    placeholder = 'Select Intervals To Test'
                    multiSelect
                    selectedKeys = {selectedIntervalKeys}
                    options = {intervalDropdownOptions}
                    onChange = {onSelectInterval}
                />
            </Panel>
        </>
    )
}

export default IntervalTraining;