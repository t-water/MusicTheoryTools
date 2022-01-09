import { INoteSound } from "../types/NoteSounds";

interface IKeyProps {
    className: string;
    noteSound: INoteSound;
    style: React.CSSProperties;
}

export const Key = (props: IKeyProps) => {
    const keyStyle: React.CSSProperties = {
        borderRadius: '0 0 3% 3%',
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
        <div 
            className = {props.className}
            style = {{...keyStyle, ...props.style}} 
            onMouseDown = {onMouseDown} 
            onMouseEnter = {onMouseEnter}
        >
        </div> 
    )
}

interface IBaseKeyProps {
    keyWidth: number;
    borderThickness: number;
    left: number;
    key: React.Key;
    noteSound: INoteSound;
    selected: boolean;
    selectedNotes: number[];
}

interface IWhiteKeyProps extends IBaseKeyProps{
}

export const WhiteKey = (props: IWhiteKeyProps) => {
    console.log('SELECTED NOTES', props.noteSound, props.selectedNotes);
    const whiteKeyWidthHeightRatio: number = 5.626;

    const whiteKeyStyle: React.CSSProperties = {
        border: `${props.borderThickness}px solid black`,
        height: `${props.keyWidth * whiteKeyWidthHeightRatio}px`,
        width: `${props.keyWidth}px`,
        left: `${props.left}px`
    }

    return <Key className = {`white-key ${props.selected ? 'selected' : ''}`} noteSound = {props.noteSound} style = {whiteKeyStyle}/>
}

interface IBlackKeyProps extends IBaseKeyProps{
}

export const BlackKey = (props: IBlackKeyProps) => {
    console.log('SELECTED NOTES', props.noteSound, props.selectedNotes);
    const blackKeyStyle: React.CSSProperties = {
        border: `${props.borderThickness}px solid black`,
        height: '150px',
        width: `${props.keyWidth}px`,
        left: `${props.left}px`,
        zIndex: 1
    }

    return <Key className = {`black-key ${props.selected ? 'selected' : ''}`} noteSound = {props.noteSound} style = {blackKeyStyle} />
}