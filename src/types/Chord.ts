import { IInterval, intervalObj } from "./Interval";

const {MajorThird, MinorThird} = intervalObj;

interface Chords {
  Major: IInterval[];
  Minor: IInterval[];
  MajorSeventh: IInterval[];
  MinorSeventh: IInterval[];
  DominantSeventh: IInterval[];
}

const MajorChordIntervals: IInterval[] = [MajorThird, MinorThird];
const MajorSeventhChordIntervals: IInterval[] = [MajorThird, MinorThird, MajorThird];
const MinorChordIntervals: IInterval[] = [MinorThird, MajorThird];
const MinorSeventhChordIntervals: IInterval[] = [MinorThird, MajorThird, MinorThird];
const DominantSeventhChordIntervals: IInterval[] = [MajorThird, MinorThird, MinorThird];

export const ChordsObj: Chords = {
  Major: MajorChordIntervals,
  Minor: MinorChordIntervals,
  MajorSeventh: MajorSeventhChordIntervals,
  MinorSeventh: MinorSeventhChordIntervals,
  DominantSeventh: DominantSeventhChordIntervals
}