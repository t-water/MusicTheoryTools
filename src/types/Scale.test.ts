import { useGetScaleNotes } from "../hooks/useGetScaleNotes"
import { Note, NotesObj } from "./Note";
import { ScalesObj } from "./Scale";

test('Returns Correct Notes of C Major', () => {
    const getScaleNotes = useGetScaleNotes();
    const {C} = NotesObj;
    const {Major} = ScalesObj;

    const CMajorNotes: Note[] = getScaleNotes(C, Major);

    expect(CMajorNotes[0].DistanceFromC).toBe(C.DistanceFromC);
})