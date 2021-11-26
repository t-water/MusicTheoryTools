import { Note, NotesObj } from "./Note";

const {C, CSharp, D, A, B, E, F, G, ASharp, DSharp, FSharp, GSharp} = NotesObj;

export type NoteSoundsName = 'C3' | 'CSharp3' | 'D3' | 'DSharp3' | 'E3' | 'F3' | 'FSharp3' | 'G3' | 'GSharp3' | 'A3' | 'ASharp3' | 'B3' | 'C4';

export interface INoteSound {
    Note: Note;
    GoogleDriveId: string;
    DistanceFromAZero: number;
}

export type INoteSounds = Record<NoteSoundsName, INoteSound>;

export const noteSounds: INoteSounds = {
    'C3': {
        Note: C,
        GoogleDriveId: '1BpkFD9_749hMLSlWuRR8XL8aLB4GAaqy',
        DistanceFromAZero: 27
    },
    'CSharp3': {
        Note: CSharp,
        GoogleDriveId: '1CQUsrtuWqOeRcoQVaAcWNs9t-smHDC3U',
        DistanceFromAZero: 28
    },
    'D3': {
        Note: D,
        GoogleDriveId: '1ioTfbHzhxKfjNuSmdqWRAmn05IhS9nyj',
        DistanceFromAZero: 29
    },
    'DSharp3': {
        Note: DSharp,
        GoogleDriveId: '16afZ6F8scJquISDGEUEduaeDCLnUlYNF',
        DistanceFromAZero: 30
    },
    'E3': {
        Note: E,
        GoogleDriveId: '1IWYCZgEGJrUNbo55VRJc2WMxkrkBOKAE',
        DistanceFromAZero: 31
    },
    'F3': {
        Note: F,
        GoogleDriveId: '1sT24CrIKIThc_KiQKWL5_hvv1uU7G_8l',
        DistanceFromAZero: 32
    },
    'FSharp3': {
        Note: FSharp,
        GoogleDriveId: '19PFSsIKo8scHE7a65_3PJ7pcujiqtgcY',
        DistanceFromAZero: 33
    },
    'G3': {
        Note: G,
        GoogleDriveId: '1JNWSi0S4R_CTeEyQaPtiHqQuNIUOorwZ',
        DistanceFromAZero: 34
    },
    'GSharp3': {
        Note: GSharp,
        GoogleDriveId: '1jTpVrMiE6t2ZWiofA4MXw-_JfKWNy5GG',
        DistanceFromAZero: 35
    },
    'A3': {
        Note: A,
        GoogleDriveId: '1nqlk2lYSimFqlKGhjHnF2FiWJklYcE8q',
        DistanceFromAZero: 36
    },
    'ASharp3': {
        Note: ASharp,
        GoogleDriveId: '1sOD43duOhbCl-kV7y7vWSjFTlXRbsBqY',
        DistanceFromAZero: 37
    },
    'B3': {
        Note: B,
        GoogleDriveId: '1KZpfS0_k0zuF1nRwXx8aSirCSemOQp1_',
        DistanceFromAZero: 38
    },
    'C4': {
        Note: C,
        GoogleDriveId: '1BpkFD9_749hMLSlWuRR8XL8aLB4GAaqy',
        DistanceFromAZero: 39
    },
}

export const noteSoundsArr: INoteSound[] = Object.entries(noteSounds)
                                                 .map(([propName, noteSound]) => noteSound)

const distancesFromAZero: number[] = Object.getOwnPropertyNames(noteSounds).map((propName: string) => parseInt(propName));

export const MIN_DISTANCE_FROM_A_ZERO: number = Math.min(...distancesFromAZero);
export const MAX_DISTANCE_FROM_A_ZERO: number = Math.max(...distancesFromAZero);