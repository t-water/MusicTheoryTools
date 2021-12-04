import { ChordShapeName } from "./ChordShape";
import { Note } from "./Note";

export interface Chord {
    Root: Note;
    Notes: Note[];
    Shape: ChordShapeName;
}