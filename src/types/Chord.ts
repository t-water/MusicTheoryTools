import { Interval, intervalObj } from "./Interval";

const {MajorThird, MinorThird} = intervalObj;

interface Chords {
  Major: Interval[];
  Minor: Interval[];
  MajorSeventh: Interval[];
  MinorSeventh: Interval[];
  DominantSeventh: Interval[];
}

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