export interface IInterval{
    distance: number;
    name: string;
    abbreviation: string;
}

interface IIntervals{
    MinorSecond: IInterval;
    MajorSecond: IInterval;
    MinorThird: IInterval;
    MajorThird: IInterval;
    PerfectFourth: IInterval;
    Tritone: IInterval;
    PerfectFifth: IInterval;
    MinorSixth: IInterval;
    MajorSixth: IInterval;
    MinorSeventh: IInterval;
    MajorSeventh: IInterval;
    Octave: IInterval;
}

const MinorSecond: IInterval = { distance: 1, name: 'Minor Second', abbreviation: 'm2' }

const MajorSecond: IInterval = { distance: 2, name: 'Major Second', abbreviation: 'M2' }

const MinorThird: IInterval = { distance: 3, name: 'Minor Third', abbreviation: 'm3' }

const MajorThird: IInterval = { distance: 4, name: 'Major Third', abbreviation: 'M3' }

const PerfectFourth: IInterval = { distance: 5, name: 'Perfect Fourth', abbreviation: 'P4' }

const Tritone: IInterval = { distance: 6, name: 'Tritone', abbreviation: 'TT' }

const PerfectFifth: IInterval = { distance: 7, name: 'Perfect Fifth', abbreviation: 'P5' }

const MinorSixth: IInterval = { distance: 8, name: 'Minor Sixth', abbreviation: 'm6' }

const MajorSixth: IInterval = { distance: 9, name: 'Major Sixth', abbreviation: 'M6' }

const MinorSeventh: IInterval = { distance: 10, name: 'Minor Seventh', abbreviation: 'm7' }

const MajorSeventh: IInterval = { distance: 11, name: 'Major Seventh', abbreviation: 'M7' }

const Octave: IInterval = { distance: 12, name: 'Octave', abbreviation: '8ve' }

export const intervalObj: IIntervals = {MinorSecond, MajorSecond, MinorThird, MajorThird, PerfectFourth, Tritone, PerfectFifth, MinorSixth, MajorSixth, MinorSeventh, MajorSeventh, Octave}
export const intervalArr: IInterval[] = Object.entries(intervalObj).map(([propName, interval]) => interval);