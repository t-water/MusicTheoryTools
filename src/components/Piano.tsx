import React from 'react';
import { noteSounds, noteSoundsArr, NoteSoundsName } from '../types/NoteSounds';
import { INoteSound } from '../types/NoteSounds';

interface IKeyProps {
    keyWidth: number;
    borderThickness: number;
    left: number;
    key: number;
    noteSound: INoteSound;
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

    const playNote = () => {
        props.noteSound.Audio.pause();
        props.noteSound.Audio.currentTime = 0;
        props.noteSound.Audio.play();
    }

    const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.buttons === 1) {
            playNote();
        }
    };

    const onMouseDown = () => {
        playNote();
    }

    return (
        <div key = {props.key} style = {whiteKeyStyle} onMouseDown = {onMouseDown} onMouseEnter = {onMouseEnter}></div>
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
    startingNoteSound: NoteSoundsName;
    endingNoteSound: NoteSoundsName;
}

const Piano = (props: IPianoProps) => { 
    const getNoteSoundDistanceFromAZero = (noteSound: NoteSoundsName): number => {
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

        if (!currentNoteSound.Note.IsAccidental) {
            keys.push(
                <WhiteKey 
                    key = {i} 
                    keyWidth = {whiteKeyWidth} 
                    borderThickness = {whiteKeyBorderThickness} 
                    left = {currentWidth} 
                    noteSound = {currentNoteSound}
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
                    noteSound = {currentNoteSound}
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