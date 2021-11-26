import React from 'react';
import { noteSounds, noteSoundsArr, NoteSoundsName } from '../types/NoteSounds';
import { INoteSound } from '../types/NoteSounds';
// import { Note } from '../types/Note';

interface IKeyProps {
    keyWidth: number;
    borderThickness: number;
    left: number;
    key: number;
    // note: Note;
}

interface IWhiteKeyProps extends IKeyProps{
}

const WhiteKey = (props: IWhiteKeyProps) => {
    const whiteKeyWidthHeightRatio: number = 5.626;

    const whiteKeyStyle: React.CSSProperties = {
        border: `${props.borderThickness}px solid black`,
        borderRadius: '0 0 3% 3%',
        height: `${props.keyWidth * whiteKeyWidthHeightRatio}px`,
        width: `${props.keyWidth}px`,
        left: `${props.left}px`,
        position: 'absolute'
    }

    return (
        <div key = {props.key} style = {whiteKeyStyle}></div>
    )
}

interface IBlackKeyProps extends IKeyProps{
}

const BlackKey = (props: IBlackKeyProps) => {
    const blackKeyStyle: React.CSSProperties = {
        backgroundColor: 'black',
        border: `${props.borderThickness}px solid black`,
        borderRadius: '0 0 3% 3%',
        position: 'absolute',
        height: '150px',
        width: `${props.keyWidth}px`,
        left: `${props.left}px`,
        zIndex: 1
    }

    return (
        <div key = {props.key} style = {blackKeyStyle}></div>
    )
}

interface IPianoProps {
    startingNoteSound: NoteSoundsName | INoteSound;
    endingNoteSound: NoteSoundsName | INoteSound;
}

const Piano = (props: IPianoProps) => { 
    const getNoteSoundDistanceFromAZero = (noteSound: NoteSoundsName | INoteSound): number => {
        let noteSoundObject: INoteSound;

        if (typeof noteSound === 'string') {
            noteSoundObject = noteSounds[noteSound];
        } else{
            noteSoundObject = noteSound;
        }

        return noteSoundObject.DistanceFromAZero;
    }

    const whiteKeyWidth: number = 40;
    const whiteKeyBorderThickness: number = 1;
    const whiteKeyWidthWithBorder: number = whiteKeyWidth + whiteKeyBorderThickness * 2;
    const keys: JSX.Element[] = [];

    const blackKeyWidth: number = 25;
    const blackKeyBorderThickness: number = 1;
    const blackKeyWidthWithBorder: number = blackKeyWidth + blackKeyBorderThickness * 2;
    const halfBlackWidth: number = blackKeyWidthWithBorder / 2;

    const startingKeyDistanceFromAZero: number = getNoteSoundDistanceFromAZero(props.startingNoteSound);
    const endingKeyDistanceFromAZero: number = getNoteSoundDistanceFromAZero(props.endingNoteSound);

    let currentWidth: number = 0;

    for (let i=startingKeyDistanceFromAZero; i<=endingKeyDistanceFromAZero; i++) {
        const currentNoteSound: INoteSound = noteSoundsArr.filter((sound: INoteSound) => sound.DistanceFromAZero === i)[0];

        const positionInSequence: number = i - startingKeyDistanceFromAZero;

        if (!currentNoteSound.Note.IsAccidental) {
            keys.push(
                <WhiteKey 
                    key = {i} 
                    keyWidth = {whiteKeyWidth} 
                    borderThickness = {whiteKeyBorderThickness} 
                    left = {currentWidth} 
                />
            );

            currentWidth += whiteKeyWidthWithBorder;
        } else {
            keys.push(
                <BlackKey
                    key = {i}
                    keyWidth = {blackKeyWidth}
                    borderThickness = {blackKeyBorderThickness}
                    left = {currentWidth - halfBlackWidth}
                />
            );
        }
    }

    return (
        <div style = {{margin: '5px 10px', position: 'relative'}}>
            {keys}
        </div>
    )
}

export default Piano;