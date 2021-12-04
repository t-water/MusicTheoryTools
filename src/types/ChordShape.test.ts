import { useGetNoteSequence } from "../hooks/useGetNoteSequence"
import { Note, NotesObj } from "./Note";
import { ChordShapesObj } from "./ChordShape";

const {C, E, G, A, B, D, F} = NotesObj;
const {Major, Minor, MajorSeventh, MinorSeventh, DominantSeventh} = ChordShapesObj;

test('Returns Correct Notes of C Major', () => {
    const getChordNotes = useGetNoteSequence();
    
    const CMajorNotes: Note[] = getChordNotes(C, Major);

    expect(CMajorNotes[0].DistanceFromC).toBe(C.DistanceFromC);
    expect(CMajorNotes[1].DistanceFromC).toBe(E.DistanceFromC);
    expect(CMajorNotes[2].DistanceFromC).toBe(G.DistanceFromC);
});

test('Returns Correct Notes of A Minor', () => {
    const getChordNotes = useGetNoteSequence();

    const AMinorNotes: Note[] = getChordNotes(A, Minor);

    expect(AMinorNotes[0].DistanceFromC).toBe(A.DistanceFromC);
    expect(AMinorNotes[1].DistanceFromC).toBe(C.DistanceFromC);
    expect(AMinorNotes[2].DistanceFromC).toBe(E.DistanceFromC);
});

test('Returns Correct Notes of G Dominant Seventh', () => {
    const getChordNotes = useGetNoteSequence();

    const GSevenNotes: Note[] = getChordNotes(G, DominantSeventh);

    expect(GSevenNotes[0].DistanceFromC).toBe(G.DistanceFromC);
    expect(GSevenNotes[1].DistanceFromC).toBe(B.DistanceFromC);
    expect(GSevenNotes[2].DistanceFromC).toBe(D.DistanceFromC);
    expect(GSevenNotes[3].DistanceFromC).toBe(F.DistanceFromC);
});

test('Returns Correct Notes of C Major Seven', () => {
    const getChordNotes = useGetNoteSequence();
    
    const CMajorSeventhNotes: Note[] = getChordNotes(C, MajorSeventh);

    expect(CMajorSeventhNotes[0].DistanceFromC).toBe(C.DistanceFromC);
    expect(CMajorSeventhNotes[1].DistanceFromC).toBe(E.DistanceFromC);
    expect(CMajorSeventhNotes[2].DistanceFromC).toBe(G.DistanceFromC);
    expect(CMajorSeventhNotes[3].DistanceFromC).toBe(B.DistanceFromC);
});

test('Returns Correct Notes of A Minor Seventh', () => {
    const getChordNotes = useGetNoteSequence();

    const AMinorSeventhNotes: Note[] = getChordNotes(A, MinorSeventh);

    expect(AMinorSeventhNotes[0].DistanceFromC).toBe(A.DistanceFromC);
    expect(AMinorSeventhNotes[1].DistanceFromC).toBe(C.DistanceFromC);
    expect(AMinorSeventhNotes[2].DistanceFromC).toBe(E.DistanceFromC);
    expect(AMinorSeventhNotes[3].DistanceFromC).toBe(G.DistanceFromC);
});