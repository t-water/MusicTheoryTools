import { CommandBar, Dropdown, ICommandBarItemProps, IDropdownOption, Panel, Toggle } from '@fluentui/react';
import { useBoolean } from '@fluentui/react-hooks';
import React, { useState } from 'react';
import useGetIntervalNote from '../hooks/useGetIntervalNote';
import useGetRandomNote from '../hooks/useGetRandomNote';
import { getSettingsCommandBarItem } from '../types/CommonElements';
import { IInterval, intervalArr } from '../types/Interval';
import { Note } from '../types/Note';

interface IIntervalTrainingProps{}

const intervalDropdownOptions: IDropdownOption[] = intervalArr.map((interval: IInterval) => ({
    key: interval.abbreviation,
    text: interval.name,
    data: interval.distance
}));

const initialSelectedItervalKeys = intervalArr.map((interval: IInterval) => interval.abbreviation);

const IntervalTraining = (props: IIntervalTrainingProps) => { 
    const getRandomNote = useGetRandomNote();
    const {getAscending} = useGetIntervalNote();
    const [randomNote, setRandomNote] = useState<Note>(getRandomNote());
    const [currentInterval, setCurrentInterval] = useState<IInterval>();
    const [panelIsOpen, {setFalse: closePanel, setTrue: openPanel}] = useBoolean(false);
    const [selectedIntervalKeys, setSelectedIntervalKeys] = useState<string[]>([...initialSelectedItervalKeys]);

    const intervalsInUse: IInterval[] = selectedIntervalKeys.map((key: string) => {
        return intervalArr.filter((interval: IInterval) => interval.abbreviation === key)[0];
    })

    const intervalButtons: JSX.Element[] = intervalsInUse.map((interval: IInterval) => {
        return (
            <div key = {interval.abbreviation}>
                <button onClick = {(e: React.MouseEvent<HTMLButtonElement>) => {e.preventDefault(); setCurrentInterval(interval)}}>{interval.name}</button>
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
            
            <div>{randomNote.Abbreviation}</div>
            <div>{currentInterval ? getAscending(randomNote, currentInterval).Abbreviation : ''}</div>
            <div>
                <button onClick = {(e: React.MouseEvent<HTMLButtonElement>) => {e.preventDefault(); setRandomNote(getRandomNote())}}>New Starting Note</button>
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