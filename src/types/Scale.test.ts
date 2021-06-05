import { useGetScaleNotes } from "../hooks/useGetScaleNotes"
import { Note, NotesObj } from "./Note";
import { ScalesObj } from "./Scale";

test('Returns Correct Notes of C Major', () => {
    const getScaleNotes = useGetScaleNotes();
    const {C, D, E, F, G, A, B} = NotesObj;
    const {Major} = ScalesObj;

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
    const getScaleNotes = useGetScaleNotes();
    const {C, D, DSharp, F, G, GSharp, ASharp} = NotesObj;
    const {Minor} = ScalesObj;

    const CMajorNotes: Note[] = getScaleNotes(C, Minor);

    expect(CMajorNotes[0].DistanceFromC).toBe(C.DistanceFromC);
    expect(CMajorNotes[1].DistanceFromC).toBe(D.DistanceFromC);
    expect(CMajorNotes[2].DistanceFromC).toBe(DSharp.DistanceFromC);
    expect(CMajorNotes[3].DistanceFromC).toBe(F.DistanceFromC);
    expect(CMajorNotes[4].DistanceFromC).toBe(G.DistanceFromC);
    expect(CMajorNotes[5].DistanceFromC).toBe(GSharp.DistanceFromC);
    expect(CMajorNotes[6].DistanceFromC).toBe(ASharp.DistanceFromC);
});