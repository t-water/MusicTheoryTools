import { IInterval, intervalObj } from "./Interval";

const {MinorSecond, MajorSecond} = intervalObj

interface Scales {
    Major: IInterval[];
    Minor: IInterval[];
}

const MajorScaleIntervals: IInterval[] = [ MajorSecond, MajorSecond, MinorSecond, MajorSecond, MajorSecond, MajorSecond ];

const MinorScaleIntervals: IInterval[] = [ MajorSecond, MinorSecond, MajorSecond, MajorSecond, MinorSecond, MajorSecond ];

export const ScalesObj: Scales = {
    Major: MajorScaleIntervals,
    Minor: MinorScaleIntervals
}