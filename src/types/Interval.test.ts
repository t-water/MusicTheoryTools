import { getAscending, getDescending } from "./GetIntervalNote";
import { intervalObj } from "./Interval";
import { NotesObj } from "./Note";

const {C, CSharp, D, A, B, E, F, G, ASharp, DSharp, FSharp, GSharp} = NotesObj;
const {MinorSecond, MajorSecond, MinorThird, MajorThird, PerfectFourth, Tritone, PerfectFifth, MinorSixth, MajorSixth, MinorSeventh, MajorSeventh, Octave} = intervalObj;

test('Returns Correct Ascending Intervals of C', () => {
    expect(getAscending(C, MinorSecond).DistanceFromC).toBe(CSharp.DistanceFromC);
    expect(getAscending(C, MajorSecond).DistanceFromC).toBe(D.DistanceFromC);
    expect(getAscending(C, MinorThird).DistanceFromC).toBe(DSharp.DistanceFromC);
    expect(getAscending(C, MajorThird).DistanceFromC).toBe(E.DistanceFromC);
    expect(getAscending(C, PerfectFourth).DistanceFromC).toBe(F.DistanceFromC);
    expect(getAscending(C, Tritone).DistanceFromC).toBe(FSharp.DistanceFromC);
    expect(getAscending(C, PerfectFifth).DistanceFromC).toBe(G.DistanceFromC);
    expect(getAscending(C, MinorSixth).DistanceFromC).toBe(GSharp.DistanceFromC);
    expect(getAscending(C, MajorSixth).DistanceFromC).toBe(A.DistanceFromC);
    expect(getAscending(C, MinorSeventh).DistanceFromC).toBe(ASharp.DistanceFromC);
    expect(getAscending(C, MajorSeventh).DistanceFromC).toBe(B.DistanceFromC);
    expect(getAscending(C, Octave).DistanceFromC).toBe(C.DistanceFromC);
})

test('Returns Correct Descending Intervals of C', () => {
    expect(getDescending(C, MinorSecond).DistanceFromC).toBe(B.DistanceFromC);
    expect(getDescending(C, MajorSecond).DistanceFromC).toBe(ASharp.DistanceFromC);
    expect(getDescending(C, MinorThird).DistanceFromC).toBe(A.DistanceFromC);
    expect(getDescending(C, MajorThird).DistanceFromC).toBe(GSharp.DistanceFromC);
    expect(getDescending(C, PerfectFourth).DistanceFromC).toBe(G.DistanceFromC);
    expect(getDescending(C, Tritone).DistanceFromC).toBe(FSharp.DistanceFromC);
    expect(getDescending(C, PerfectFifth).DistanceFromC).toBe(F.DistanceFromC);
    expect(getDescending(C, MinorSixth).DistanceFromC).toBe(E.DistanceFromC);
    expect(getDescending(C, MajorSixth).DistanceFromC).toBe(DSharp.DistanceFromC);
    expect(getDescending(C, MinorSeventh).DistanceFromC).toBe(D.DistanceFromC);
    expect(getDescending(C, MajorSeventh).DistanceFromC).toBe(CSharp.DistanceFromC);
    expect(getDescending(C, Octave).DistanceFromC).toBe(C.DistanceFromC);
})