import { Note, NotesObj } from "./Note";

const {C, CSharp, D, A, B, E, F, G, ASharp, DSharp, FSharp, GSharp} = NotesObj;

export type NoteSoundsName = 'C3' | 'CSharp3' | 'D3' | 'DSharp3' | 'E3' | 'F3' | 'FSharp3' | 'G3' | 'GSharp3' | 'A3' | 'ASharp3' | 'B3' | 'C4';

export interface INoteSound {
    Note: Note;
    GoogleDriveId: string;
    Name: NoteSoundsName;
}

export interface INoteSounds {
    [distanceFromAZero: number]: INoteSound;
}

export const noteSounds: INoteSounds = {
    27: {
        Note: C,
        GoogleDriveId: '1BpkFD9_749hMLSlWuRR8XL8aLB4GAaqy',
        Name: 'C3'
    },
    28: {
        Note: CSharp,
        GoogleDriveId: '1CQUsrtuWqOeRcoQVaAcWNs9t-smHDC3U',
        Name: 'CSharp3'
    },
    29: {
        Note: D,
        GoogleDriveId: '1ioTfbHzhxKfjNuSmdqWRAmn05IhS9nyj',
        Name: 'D3'
    },
    30: {
        Note: DSharp,
        GoogleDriveId: '16afZ6F8scJquISDGEUEduaeDCLnUlYNF',
        Name: 'DSharp3'
    },
    31: {
        Note: E,
        GoogleDriveId: '1IWYCZgEGJrUNbo55VRJc2WMxkrkBOKAE',
        Name: 'E3'
    },
    32: {
        Note: F,
        GoogleDriveId: '1sT24CrIKIThc_KiQKWL5_hvv1uU7G_8l',
        Name: 'F3'
    },
    33: {
        Note: FSharp,
        GoogleDriveId: '19PFSsIKo8scHE7a65_3PJ7pcujiqtgcY',
        Name: 'FSharp3'
    },
    34: {
        Note: G,
        GoogleDriveId: '1JNWSi0S4R_CTeEyQaPtiHqQuNIUOorwZ',
        Name: 'G3'
    },
    35: {
        Note: GSharp,
        GoogleDriveId: '1jTpVrMiE6t2ZWiofA4MXw-_JfKWNy5GG',
        Name: 'GSharp3'
    },
    36: {
        Note: A,
        GoogleDriveId: '1nqlk2lYSimFqlKGhjHnF2FiWJklYcE8q',
        Name: 'A3'
    },
    37: {
        Note: ASharp,
        GoogleDriveId: '1sOD43duOhbCl-kV7y7vWSjFTlXRbsBqY',
        Name: 'ASharp3'
    },
    38: {
        Note: B,
        GoogleDriveId: '1KZpfS0_k0zuF1nRwXx8aSirCSemOQp1_',
        Name: 'B3'
    },
    39: {
        Note: C,
        GoogleDriveId: '1BpkFD9_749hMLSlWuRR8XL8aLB4GAaqy',
        Name: 'C4'
    },
}

export const noteSoundsArr: INoteSound[] = Object.entries(noteSounds)
                                                 .map(([propName, noteSound]) => noteSound)

const distancesFromMiddleC: number[] = Object.getOwnPropertyNames(noteSounds).map((propName: string) => parseInt(propName));

export const MIN_DISTANCE_FROM_MIDDLE_C: number = Math.min(...distancesFromMiddleC);
export const MAX_DISTANCE_FROM_MIDDLE_C: number = Math.max(...distancesFromMiddleC);