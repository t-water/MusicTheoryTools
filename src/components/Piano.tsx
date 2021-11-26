import React from 'react';

interface IPianoProps {

}

interface IWhiteKeyProps {
    keyWidth: number;
    borderThickness: number;
    left: number;
    key: number;
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

interface IBlackKeyProps {
    key: number;
    keyWidth: number;
    borderThickness: number;
    left: number;
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

const Piano = (props: IPianoProps) => { 
    const whiteKeyWidth: number = 40;
    const whiteKeyBorderThickness: number = 1;
    const whiteKeyWidthWithBorder: number = whiteKeyWidth + whiteKeyBorderThickness * 2;
    const whiteKeys: JSX.Element[] = [];

    for (let i=0; i<8; i++) {
        whiteKeys.push(
            <WhiteKey 
                key = {i} 
                keyWidth = {whiteKeyWidth} 
                borderThickness = {whiteKeyBorderThickness} 
                left = {whiteKeyWidthWithBorder * i} 
            />
        );
    }

    const blackKeyWidth: number = 25;
    const blackKeyBorderThickness: number = 1;
    const blackKeyWidthWithBorder: number = blackKeyWidth + blackKeyBorderThickness * 2;
    const blackKeys: JSX.Element[] = [];

    for (let i=0; i<6; i++) {
        if (i !== 2) {
            blackKeys.push(
                <BlackKey
                    key = {i}
                    keyWidth = {blackKeyWidth}
                    borderThickness = {blackKeyBorderThickness}
                    left = {whiteKeyWidthWithBorder * (i+1) - blackKeyWidthWithBorder / 2}
                />
            )
        }
    }

    return (
        <div style = {{margin: '5px 10px', position: 'relative'}}>
            {whiteKeys}

            {blackKeys}
        </div>
    )
}

export default Piano;