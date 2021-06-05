import { useGetNoteSequence } from "../hooks/useGetNoteSequence"
import { Note, NotesObj } from "./Note";
import { ScalesObj } from "./Scale";

const {C, D, E, F, G, A, B, DSharp, GSharp, ASharp} = NotesObj;
const {Major, Minor} = ScalesObj;

test('Returns Correct Notes of C Major', () => {
    const getScaleNotes = useGetNoteSequence();
    
    const CMajorNotes: Note[] = getScaleNotes(C, Major);

    expect(CMajorNotes[0].DistanceFromC).toBe(C.DistanceFromC);
    expect(CMajorNotes[1].DistanceFromC).toBe(D.DistanceFromC);
    expect(CMajorNotes[2].DistanceFromC).toBe(E.DistanceFromC);
    expect(CMajorNotes[3].DistanceFromC).toBe(F.DistanceFromC);
    expect(CMajorNotes[4].DistanceFromC).toBe(G.DistanceFromC);
    expect(CMajorNotes[5].DistanceFromC).toBe(A.DistanceFromC);
    expect(CMajorNotes[6].DistanceFromC).toBe(B.DistanceFromC);
});

test('Returns Correct Notes of C Minor', () => {
    const getScaleNotes = useGetNoteSequence();

    const CMinorNotes: Note[] = getScaleNotes(C, Minor);

    expect(CMinorNotes[0].DistanceFromC).toBe(C.DistanceFromC);
    expect(CMinorNotes[1].DistanceFromC).toBe(D.DistanceFromC);
    expect(CMinorNotes[2].DistanceFromC).toBe(DSharp.DistanceFromC);
    expect(CMinorNotes[3].DistanceFromC).toBe(F.DistanceFromC);
    expect(CMinorNotes[4].DistanceFromC).toBe(G.DistanceFromC);
    expect(CMinorNotes[5].DistanceFromC).toBe(GSharp.DistanceFromC);
    expect(CMinorNotes[6].DistanceFromC).toBe(ASharp.DistanceFromC);
});