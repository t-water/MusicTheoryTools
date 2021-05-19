type Pitches = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

enum Accidentals {
    Sharp = '♯',
    Flat = '♭',
    None = ''
}

export interface Note{
    Pitch: Pitches;
    Accidental: Accidentals;
}

const C: Note = {
    Pitch: 'C',
    Accidental: Accidentals.None
}

const D: Note = {
    Pitch: 'D',
    Accidental: Accidentals.None
}

const E: Note = {
    Pitch: 'E',
    Accidental: Accidentals.None
}

const F: Note = {
    Pitch: 'F',
    Accidental: Accidentals.None
}

const G: Note = {
    Pitch: 'G',
    Accidental: Accidentals.None
}

const A: Note = {
    Pitch: 'A',
    Accidental: Accidentals.None
}

const B: Note = {
    Pitch: 'B',
    Accidental: Accidentals.None
}

/*
    FLATS
*/

const DFlat: Note = {
    Pitch: 'D',
    Accidental: Accidentals.Flat
}

const EFlat: Note = {
    Pitch: 'E',
    Accidental: Accidentals.Flat
}

const GFlat: Note = {
    Pitch: 'G',
    Accidental: Accidentals.Flat
}

const AFlat: Note = {
    Pitch: 'A',
    Accidental: Accidentals.Flat
}

const BFlat: Note = {
    Pitch: 'B',
    Accidental: Accidentals.Flat
}

/*
    Sharps
*/

var CSharp: Note = {
    Pitch: 'C',
    Accidental: Accidentals.Sharp
}

var DSharp: Note = {
    Pitch: 'D',
    Accidental: Accidentals.Sharp
}

var FSharp: Note = {
    Pitch: 'F',
    Accidental: Accidentals.Sharp
}

var GSharp: Note = {
    Pitch: 'G',
    Accidental: Accidentals.Sharp
}

var ASharp: Note = {
    Pitch: 'A',
    Accidental: Accidentals.Sharp
}

export const Notes = { A, B, C, D, E, F, G, AFlat, BFlat, DFlat, EFlat, GFlat, ASharp, CSharp, DSharp, FSharp, GSharp }