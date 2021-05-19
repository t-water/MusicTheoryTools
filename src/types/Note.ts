type Pitches = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

enum Accidentals {
    Sharp = '♯',
    Flat = '♭',
    None = ''
}

export interface Note{
    Pitch: Pitches;
    Accidental: Accidentals;
    Equivalent: Note | null;
}

const C: Note = {
    Pitch: 'C',
    Accidental: Accidentals.None,
    Equivalent: null
}

const D: Note = {
    Pitch: 'D',
    Accidental: Accidentals.None,
    Equivalent: null
}

const E: Note = {
    Pitch: 'E',
    Accidental: Accidentals.None,
    Equivalent: null
}

const F: Note = {
    Pitch: 'F',
    Accidental: Accidentals.None,
    Equivalent: null
}

const G: Note = {
    Pitch: 'G',
    Accidental: Accidentals.None,
    Equivalent: null
}

const A: Note = {
    Pitch: 'A',
    Accidental: Accidentals.None,
    Equivalent: null
}

const B: Note = {
    Pitch: 'B',
    Accidental: Accidentals.None,
    Equivalent: null
}

/*
    FLATS
*/

const DFlat: Note = {
    Pitch: 'D',
    Accidental: Accidentals.Flat,
    Equivalent: CSharp
}

const EFlat: Note = {
    Pitch: 'E',
    Accidental: Accidentals.Flat,
    Equivalent: DSharp
}

const GFlat: Note = {
    Pitch: 'G',
    Accidental: Accidentals.Flat,
    Equivalent: FSharp
}

const AFlat: Note = {
    Pitch: 'A',
    Accidental: Accidentals.Flat,
    Equivalent: GSharp
}

const BFlat: Note = {
    Pitch: 'B',
    Accidental: Accidentals.Flat,
    Equivalent: ASharp
}

/*
    Sharps
*/

var CSharp: Note = {
    Pitch: 'C',
    Accidental: Accidentals.Sharp,
    Equivalent: DFlat
}

var DSharp: Note = {
    Pitch: 'D',
    Accidental: Accidentals.Sharp,
    Equivalent: EFlat
}

var FSharp: Note = {
    Pitch: 'F',
    Accidental: Accidentals.Sharp,
    Equivalent: GFlat
}

var GSharp: Note = {
    Pitch: 'G',
    Accidental: Accidentals.Sharp,
    Equivalent: AFlat
}

var ASharp: Note = {
    Pitch: 'A',
    Accidental: Accidentals.Sharp,
    Equivalent: BFlat
}

export const Notes = { A, B, C, D, E, F, G, AFlat, BFlat, DFlat, EFlat, GFlat, ASharp, CSharp, DSharp, FSharp, GSharp }