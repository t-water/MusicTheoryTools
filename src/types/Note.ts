export interface Note{
    Name: string;
    Abbreviation: string;
    FlatName: string;
    FlatAbbreviation: string;
    SharpName: string;
    SharpAbbreviation: string;
    DistanceFromC: number;
    IsAccidental: boolean;
}

const C: Note = {
    Name: 'C',
    Abbreviation: 'C',
    FlatName: 'D Flat Flat',
    FlatAbbreviation: 'D♭♭',
    SharpName: 'B Sharp',
    SharpAbbreviation: 'B♯',
    DistanceFromC: 0,
    IsAccidental: false
}

const D: Note = {
    Name: 'D',
    Abbreviation: 'D',
    FlatName: 'E Flat Flat',
    FlatAbbreviation: 'E♭♭',
    SharpName: 'C Sharp Sharp',
    SharpAbbreviation: 'C♯♯',
    DistanceFromC: 2,
    IsAccidental: false
}

const E: Note = {
    Name: 'E',
    Abbreviation: 'E',
    FlatName: 'F Flat',
    FlatAbbreviation: 'F♭',
    SharpName: 'D Sharp Sharp',
    SharpAbbreviation: 'D♯♯',
    DistanceFromC: 4,
    IsAccidental: false
}

const F: Note = {
    Name: 'F',
    Abbreviation: 'F',
    FlatName: 'G Flat Flat',
    FlatAbbreviation: 'G♭♭',
    SharpName: 'E Sharp',
    SharpAbbreviation: 'E♯',
    DistanceFromC: 5,
    IsAccidental: false
}

const G: Note = {
    Name: 'G',
    Abbreviation: 'G',
    FlatName: 'A Flat Flat',
    FlatAbbreviation: 'A♭♭',
    SharpName: 'F Sharp Sharp',
    SharpAbbreviation: 'F♯♯',
    DistanceFromC: 7,
    IsAccidental: false
}

const A: Note = {
    Name: 'A',
    Abbreviation: 'A',
    FlatName: 'B Flat Flat',
    FlatAbbreviation: 'B♭♭',
    SharpName: 'G Sharp Sharp',
    SharpAbbreviation: 'G♯♯',
    DistanceFromC: 9,
    IsAccidental: false
}

const B: Note = {
    Name: 'B',
    Abbreviation: 'B',
    FlatName: 'C Flat',
    FlatAbbreviation: 'C♭',
    SharpName: 'A Sharp Sharp',
    SharpAbbreviation: 'A♯♯',
    DistanceFromC: 11,
    IsAccidental: false
}

/*
    ACCIDENTALS
*/

const CSharp: Note = {
    Name: 'C Sharp / D Flat',
    Abbreviation: 'C♯ / D♭',
    FlatName: 'D Flat',
    FlatAbbreviation: 'D♭',
    SharpName: 'C Sharp',
    SharpAbbreviation: 'C♯',
    DistanceFromC: 1,
    IsAccidental: true
}

const DSharp: Note = {
    Name: 'D Sharp / E Flat',
    Abbreviation: 'D♯ / E♭',
    FlatName: 'E Flat',
    FlatAbbreviation: 'E♭',
    SharpName: 'D Sharp',
    SharpAbbreviation: 'D♯',
    DistanceFromC: 3,
    IsAccidental: true
}

const FSharp: Note = {
    Name: 'F Sharp / G Flat',
    Abbreviation: 'F♯ / G♭',
    FlatName: 'G Flat',
    FlatAbbreviation: 'G♭',
    SharpName: 'F Sharp',
    SharpAbbreviation: 'F♯',
    DistanceFromC: 6,
    IsAccidental: true
}

const GSharp: Note = {
    Name: 'G Sharp / A Flat',
    Abbreviation: 'G♯ / A♭',
    FlatName: 'A Flat',
    FlatAbbreviation: 'A♭',
    SharpName: 'G Sharp',
    SharpAbbreviation: 'G♯',
    DistanceFromC: 8,
    IsAccidental: true
}

const ASharp: Note = {
    Name: 'A Sharp / B Flat',
    Abbreviation: 'A♯ / B♭',
    FlatName: 'B Flat',
    FlatAbbreviation: 'B♭',
    SharpName: 'A Sharp',
    SharpAbbreviation: 'A♯',
    DistanceFromC: 10,
    IsAccidental: true
}

export const NotesObj = { C, CSharp, D, DSharp, E, F, FSharp, G, GSharp, A, ASharp, B };
export const NotesArr: Note[] = Object.entries(NotesObj).map(([propName, Note]) => Note);