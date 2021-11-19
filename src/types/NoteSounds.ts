import { Note, NotesObj } from "./Note";

const {C, CSharp, D, A, B, E, F, G, ASharp, DSharp, FSharp, GSharp} = NotesObj;

export interface INoteSound {
    Octave: number;
    Note: Note;
    GoogleDriveId: string;
}

export interface INoteSounds {
    C3: INoteSound;
    CSharp3: INoteSound;
    D3: INoteSound;
    DSharp3: INoteSound;
    E3: INoteSound;
    F3: INoteSound;
    FSharp3: INoteSound;
    G3: INoteSound;
    GSharp3: INoteSound;
    A3: INoteSound;
    ASharp3: INoteSound;
    B3: INoteSound;
}

export const noteSounds: INoteSounds = {
    C3: {
        Octave: 3,
        Note: C,
        GoogleDriveId: '1BpkFD9_749hMLSlWuRR8XL8aLB4GAaqy'
    },
    CSharp3: {
        Octave: 3,
        Note: CSharp,
        GoogleDriveId: '1CQUsrtuWqOeRcoQVaAcWNs9t-smHDC3U'
    },
    D3: {
        Octave: 3,
        Note: D,
        GoogleDriveId: '1ioTfbHzhxKfjNuSmdqWRAmn05IhS9nyj'
    },
    DSharp3: {
        Octave: 3,
        Note: DSharp,
        GoogleDriveId: '16afZ6F8scJquISDGEUEduaeDCLnUlYNF'
    },
    E3: {
        Octave: 3,
        Note: E,
        GoogleDriveId: '1IWYCZgEGJrUNbo55VRJc2WMxkrkBOKAE'
    },
    F3: {
        Octave: 3,
        Note: F,
        GoogleDriveId: '1sT24CrIKIThc_KiQKWL5_hvv1uU7G_8l'
    },
    FSharp3: {
        Octave: 3,
        Note: FSharp,
        GoogleDriveId: '19PFSsIKo8scHE7a65_3PJ7pcujiqtgcY'
    },
    G3: {
        Octave: 3,
        Note: G,
        GoogleDriveId: '1JNWSi0S4R_CTeEyQaPtiHqQuNIUOorwZ'
    },
    GSharp3: {
        Octave: 3,
        Note: GSharp,
        GoogleDriveId: '1jTpVrMiE6t2ZWiofA4MXw-_JfKWNy5GG'
    },
    A3: {
        Octave: 3,
        Note: A,
        GoogleDriveId: '1nqlk2lYSimFqlKGhjHnF2FiWJklYcE8q'
    },
    ASharp3: {
        Octave: 3,
        Note: ASharp,
        GoogleDriveId: '1sOD43duOhbCl-kV7y7vWSjFTlXRbsBqY'
    },
    B3: {
        Octave: 3,
        Note: B,
        GoogleDriveId: '1KZpfS0_k0zuF1nRwXx8aSirCSemOQp1_'
    }
}