import { Note, NotesObj } from "./Note";

const {C, CSharp, D, A, B, E, F, G, ASharp, DSharp, FSharp, GSharp} = NotesObj;

export interface INoteSound {
    Octave: number;
    Note: Note;
    GoogleDriveId: string;
}

export interface INoteSounds {
    C4: INoteSound;
    CSharp4: INoteSound;
    D4: INoteSound;
    DSharp4: INoteSound;
    E4: INoteSound;
    F4: INoteSound;
    FSharp4: INoteSound;
    G4: INoteSound;
    GSharp4: INoteSound;
    A4: INoteSound;
    ASharp4: INoteSound;
    B4: INoteSound;
}

export const noteSounds: INoteSounds = {
    C4: {
        Octave: 4,
        Note: C,
        GoogleDriveId: '1BpkFD9_749hMLSlWuRR8XL8aLB4GAaqy'
    },
    CSharp4: {
        Octave: 4,
        Note: CSharp,
        GoogleDriveId: '1CQUsrtuWqOeRcoQVaAcWNs9t-smHDC3U'
    },
    D4: {
        Octave: 4,
        Note: D,
        GoogleDriveId: '1ioTfbHzhxKfjNuSmdqWRAmn05IhS9nyj'
    },
    DSharp4: {
        Octave: 4,
        Note: DSharp,
        GoogleDriveId: '16afZ6F8scJquISDGEUEduaeDCLnUlYNF'
    },
    E4: {
        Octave: 4,
        Note: E,
        GoogleDriveId: '1IWYCZgEGJrUNbo55VRJc2WMxkrkBOKAE'
    },
    F4: {
        Octave: 4,
        Note: F,
        GoogleDriveId: '1sT24CrIKIThc_KiQKWL5_hvv1uU7G_8l'
    },
    FSharp4: {
        Octave: 4,
        Note: FSharp,
        GoogleDriveId: '19PFSsIKo8scHE7a65_3PJ7pcujiqtgcY'
    },
    G4: {
        Octave: 4,
        Note: G,
        GoogleDriveId: '1JNWSi0S4R_CTeEyQaPtiHqQuNIUOorwZ'
    },
    GSharp4: {
        Octave: 4,
        Note: GSharp,
        GoogleDriveId: '1jTpVrMiE6t2ZWiofA4MXw-_JfKWNy5GG'
    },
    A4: {
        Octave: 4,
        Note: A,
        GoogleDriveId: '1nqlk2lYSimFqlKGhjHnF2FiWJklYcE8q'
    },
    ASharp4: {
        Octave: 4,
        Note: ASharp,
        GoogleDriveId: '1sOD43duOhbCl-kV7y7vWSjFTlXRbsBqY'
    },
    B4: {
        Octave: 4,
        Note: B,
        GoogleDriveId: '1KZpfS0_k0zuF1nRwXx8aSirCSemOQp1_'
    }
}