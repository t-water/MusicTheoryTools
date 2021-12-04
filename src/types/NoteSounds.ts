import { Note, NotesObj } from "./Note";

const {C, CSharp, D, A, B, E, F, G, ASharp, DSharp, FSharp, GSharp} = NotesObj;

export type NoteSoundsName = 'C3' | 'CSharp3' | 'D3' | 'DSharp3' | 'E3' | 'F3' | 'FSharp3' | 'G3' | 'GSharp3' | 'A3' | 'ASharp3' | 'B3' | 'C4';

export interface INoteSound {
    Note: Note;
    GoogleDriveId: string;
    DistanceFromAZero: number;
    Audio: HTMLAudioElement;
}

export type INoteSounds = Record<NoteSoundsName, INoteSound>;

export const noteSounds: INoteSounds = {
    'C3': {
        Note: C,
        GoogleDriveId: '1BpkFD9_749hMLSlWuRR8XL8aLB4GAaqy',
        DistanceFromAZero: 27,
        Audio: new Audio(`https://docs.google.com/uc?export=download&id=1BpkFD9_749hMLSlWuRR8XL8aLB4GAaqy`)
    },
    'CSharp3': {
        Note: CSharp,
        GoogleDriveId: '1CQUsrtuWqOeRcoQVaAcWNs9t-smHDC3U',
        DistanceFromAZero: 28,
        Audio: new Audio(`https://docs.google.com/uc?export=download&id=1CQUsrtuWqOeRcoQVaAcWNs9t-smHDC3U`)
    },
    'D3': {
        Note: D,
        GoogleDriveId: '1ioTfbHzhxKfjNuSmdqWRAmn05IhS9nyj',
        DistanceFromAZero: 29,
        Audio: new Audio(`https://docs.google.com/uc?export=download&id=1ioTfbHzhxKfjNuSmdqWRAmn05IhS9nyj`)
    },
    'DSharp3': {
        Note: DSharp,
        GoogleDriveId: '16afZ6F8scJquISDGEUEduaeDCLnUlYNF',
        DistanceFromAZero: 30,
        Audio: new Audio(`https://docs.google.com/uc?export=download&id=16afZ6F8scJquISDGEUEduaeDCLnUlYNF`)
    },
    'E3': {
        Note: E,
        GoogleDriveId: '1IWYCZgEGJrUNbo55VRJc2WMxkrkBOKAE',
        DistanceFromAZero: 31,
        Audio: new Audio(`https://docs.google.com/uc?export=download&id=1IWYCZgEGJrUNbo55VRJc2WMxkrkBOKAE`)
    },
    'F3': {
        Note: F,
        GoogleDriveId: '1sT24CrIKIThc_KiQKWL5_hvv1uU7G_8l',
        DistanceFromAZero: 32,
        Audio: new Audio(`https://docs.google.com/uc?export=download&id=1sT24CrIKIThc_KiQKWL5_hvv1uU7G_8l`)
    },
    'FSharp3': {
        Note: FSharp,
        GoogleDriveId: '19PFSsIKo8scHE7a65_3PJ7pcujiqtgcY',
        DistanceFromAZero: 33,
        Audio: new Audio(`https://docs.google.com/uc?export=download&id=19PFSsIKo8scHE7a65_3PJ7pcujiqtgcY`)
    },
    'G3': {
        Note: G,
        GoogleDriveId: '1JNWSi0S4R_CTeEyQaPtiHqQuNIUOorwZ',
        DistanceFromAZero: 34,
        Audio: new Audio(`https://docs.google.com/uc?export=download&id=1JNWSi0S4R_CTeEyQaPtiHqQuNIUOorwZ`)
    },
    'GSharp3': {
        Note: GSharp,
        GoogleDriveId: '1jTpVrMiE6t2ZWiofA4MXw-_JfKWNy5GG',
        DistanceFromAZero: 35,
        Audio: new Audio(`https://docs.google.com/uc?export=download&id=1jTpVrMiE6t2ZWiofA4MXw-_JfKWNy5GG`)
    },
    'A3': {
        Note: A,
        GoogleDriveId: '1nqlk2lYSimFqlKGhjHnF2FiWJklYcE8q',
        DistanceFromAZero: 36,
        Audio: new Audio(`https://docs.google.com/uc?export=download&id=1nqlk2lYSimFqlKGhjHnF2FiWJklYcE8q`)
    },
    'ASharp3': {
        Note: ASharp,
        GoogleDriveId: '1sOD43duOhbCl-kV7y7vWSjFTlXRbsBqY',
        DistanceFromAZero: 37,
        Audio: new Audio(`https://docs.google.com/uc?export=download&id=1sOD43duOhbCl-kV7y7vWSjFTlXRbsBqY`)
    },
    'B3': {
        Note: B,
        GoogleDriveId: '1KZpfS0_k0zuF1nRwXx8aSirCSemOQp1_',
        DistanceFromAZero: 38,
        Audio: new Audio(`https://docs.google.com/uc?export=download&id=1KZpfS0_k0zuF1nRwXx8aSirCSemOQp1_`)
    },
    'C4': {
        Note: C,
        GoogleDriveId: '1BpkFD9_749hMLSlWuRR8XL8aLB4GAaqy',
        DistanceFromAZero: 39,
        Audio: new Audio(`https://docs.google.com/uc?export=download&id=1BpkFD9_749hMLSlWuRR8XL8aLB4GAaqy`)
    },
}

export const noteSoundsArr: INoteSound[] = Object.entries(noteSounds)
                                                 .map(([propName, noteSound]: [string, INoteSound]) => noteSound)

const distancesFromAZero: number[] = Object.getOwnPropertyNames(noteSounds).map((propName: string) => parseInt(propName));

export const MIN_DISTANCE_FROM_A_ZERO: number = Math.min(...distancesFromAZero);
export const MAX_DISTANCE_FROM_A_ZERO: number = Math.max(...distancesFromAZero);

export type INoteAudio = Record<NoteSoundsName, HTMLAudioElement>

export const noteAudio: INoteAudio = {
    'C3': new Audio(`https://docs.google.com/uc?export=download&id=${noteSounds['C3'].GoogleDriveId}`),
    'CSharp3': new Audio(`https://docs.google.com/uc?export=download&id=${noteSounds['CSharp3'].GoogleDriveId}`),
    'D3': new Audio(`https://docs.google.com/uc?export=download&id=${noteSounds['D3'].GoogleDriveId}`),
    'DSharp3': new Audio(`https://docs.google.com/uc?export=download&id=${noteSounds['DSharp3'].GoogleDriveId}`),
    'E3': new Audio(`https://docs.google.com/uc?export=download&id=${noteSounds['E3'].GoogleDriveId}`),
    'F3': new Audio(`https://docs.google.com/uc?export=download&id=${noteSounds['F3'].GoogleDriveId}`),
    'FSharp3': new Audio(`https://docs.google.com/uc?export=download&id=${noteSounds['FSharp3'].GoogleDriveId}`),
    'G3': new Audio(`https://docs.google.com/uc?export=download&id=${noteSounds['G3'].GoogleDriveId}`),
    'GSharp3': new Audio(`https://docs.google.com/uc?export=download&id=${noteSounds['GSharp3'].GoogleDriveId}`),
    'A3': new Audio(`https://docs.google.com/uc?export=download&id=${noteSounds['A3'].GoogleDriveId}`),
    'ASharp3': new Audio(`https://docs.google.com/uc?export=download&id=${noteSounds['ASharp3'].GoogleDriveId}`),
    'B3': new Audio(`https://docs.google.com/uc?export=download&id=${noteSounds['B3'].GoogleDriveId}`),
    'C4': new Audio(`https://docs.google.com/uc?export=download&id=${noteSounds['C4'].GoogleDriveId}`),
}