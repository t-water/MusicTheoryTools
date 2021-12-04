import { Interval, intervalObj } from "./Interval";

const {MajorThird, MinorThird} = intervalObj;

type ChordShapeName = 'Major' | 'Minor' | 'MajorSeventh' | 'MinorSeventh' | 'DominantSeventh';

type Chords = Record<ChordShapeName, Interval[]>;

const MajorChordIntervals: Interval[] = [MajorThird, MinorThird];
const MajorSeventhChordIntervals: Interval[] = [MajorThird, MinorThird, MajorThird];
const MinorChordIntervals: Interval[] = [MinorThird, MajorThird];
const MinorSeventhChordIntervals: Interval[] = [MinorThird, MajorThird, MinorThird];
const DominantSeventhChordIntervals: Interval[] = [MajorThird, MinorThird, MinorThird];

export const ChordsObj: Chords = {
  Major: MajorChordIntervals,
  Minor: MinorChordIntervals,
  MajorSeventh: MajorSeventhChordIntervals,
  MinorSeventh: MinorSeventhChordIntervals,
  DominantSeventh: DominantSeventhChordIntervals
}

export const ChordsArr: Interval[][] = Object.entries(ChordsObj).map(([propName, chord]: [string, Interval[]]) => chord);