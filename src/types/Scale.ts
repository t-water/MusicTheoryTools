import { Interval, intervalObj } from "./Interval";

const {MinorSecond, MajorSecond} = intervalObj

interface Scales {
    Major: Interval[];
    Minor: Interval[];
}

const MajorScaleIntervals: Interval[] = [ MajorSecond, MajorSecond, MinorSecond, MajorSecond, MajorSecond, MajorSecond ];

const MinorScaleIntervals: Interval[] = [ MajorSecond, MinorSecond, MajorSecond, MajorSecond, MinorSecond, MajorSecond ];

export const ScalesObj: Scales = {
    Major: MajorScaleIntervals,
    Minor: MinorScaleIntervals
}