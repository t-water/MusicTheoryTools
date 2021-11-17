export interface Interval{
    distance: number;
    name: string;
    abbreviation: string;
}

interface IGenericIntervals<T> {
    MinorSecond: T;
    MajorSecond: T;
    MinorThird: T;
    MajorThird: T;
    PerfectFourth: T;
    Tritone: T;
    PerfectFifth: T;
    MinorSixth: T;
    MajorSixth: T;
    MinorSeventh: T;
    MajorSeventh: T;
    Octave: T;
}

interface IIntervals extends IGenericIntervals<Interval> {};

const MinorSecond: Interval = { distance: 1, name: 'Minor Second', abbreviation: 'm2' }

const MajorSecond: Interval = { distance: 2, name: 'Major Second', abbreviation: 'M2' }

const MinorThird: Interval = { distance: 3, name: 'Minor Third', abbreviation: 'm3' }

const MajorThird: Interval = { distance: 4, name: 'Major Third', abbreviation: 'M3' }

const PerfectFourth: Interval = { distance: 5, name: 'Perfect Fourth', abbreviation: 'P4' }

const Tritone: Interval = { distance: 6, name: 'Tritone', abbreviation: 'TT' }

const PerfectFifth: Interval = { distance: 7, name: 'Perfect Fifth', abbreviation: 'P5' }

const MinorSixth: Interval = { distance: 8, name: 'Minor Sixth', abbreviation: 'm6' }

const MajorSixth: Interval = { distance: 9, name: 'Major Sixth', abbreviation: 'M6' }

const MinorSeventh: Interval = { distance: 10, name: 'Minor Seventh', abbreviation: 'm7' }

const MajorSeventh: Interval = { distance: 11, name: 'Major Seventh', abbreviation: 'M7' }

const Octave: Interval = { distance: 12, name: 'Octave', abbreviation: '8ve' }

export const intervalObj: IIntervals = {
    MinorSecond,
    MajorSecond,
    MinorThird,
    MajorThird,
    PerfectFourth,
    Tritone,
    PerfectFifth,
    MinorSixth,
    MajorSixth,
    MinorSeventh,
    MajorSeventh,
    Octave
}

export const intervalArr: Interval[] = Object.entries(intervalObj).map(([propName, interval]) => interval);

export interface IIntervalBooleans extends IGenericIntervals<boolean> {};

export const intervalBooleansFalse: IIntervalBooleans = {
    MinorSecond: false,
    MajorSecond: false,
    MinorThird: false,
    MajorThird: false,
    PerfectFourth: false,
    Tritone: false,
    PerfectFifth: false,
    MinorSixth: false,
    MajorSixth: false,
    MinorSeventh: false,
    MajorSeventh: false,
    Octave: false
};

export const intervalBooleansTrue: IIntervalBooleans = {
    MinorSecond: true,
    MajorSecond: true,
    MinorThird: true,
    MajorThird: true,
    PerfectFourth: true,
    Tritone: true,
    PerfectFifth: true,
    MinorSixth: true,
    MajorSixth: true,
    MinorSeventh: true,
    MajorSeventh: true,
    Octave: true
};