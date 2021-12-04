import { getRandomArrayElement } from "./HelperFunctions";
import { Interval, intervalObj } from "./Interval";

const {MajorThird, MinorThird} = intervalObj;

export const ChordShapeNames: string[] = ['Major', 'Minor', 'MajorSeventh', 'MinorSeventh', 'DominantSeventh'];
export type ChordShapeName = typeof ChordShapeNames[number];

type ChordShapes = Record<ChordShapeName, Interval[]>;

const MajorChordIntervals: Interval[] = [MajorThird, MinorThird];
const MajorSeventhChordIntervals: Interval[] = [MajorThird, MinorThird, MajorThird];
const MinorChordIntervals: Interval[] = [MinorThird, MajorThird];
const MinorSeventhChordIntervals: Interval[] = [MinorThird, MajorThird, MinorThird];
const DominantSeventhChordIntervals: Interval[] = [MajorThird, MinorThird, MinorThird];

export const ChordShapesObj: ChordShapes = {
  Major: MajorChordIntervals,
  Minor: MinorChordIntervals,
  MajorSeventh: MajorSeventhChordIntervals,
  MinorSeventh: MinorSeventhChordIntervals,
  DominantSeventh: DominantSeventhChordIntervals
}

export const ChordShapesArr: Interval[][] = Object.entries(ChordShapesObj).map(([propName, chordShape]: [string, Interval[]]) => chordShape);

export const getRandomChordShapeName = () => {
  return getRandomArrayElement(ChordShapeNames);
}