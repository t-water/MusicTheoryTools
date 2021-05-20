interface IInterval{
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

const MinorSecond: IInterval = { distance: 1, name: 'Minor Second', abbreviation: 'Minor 2nd' }

const MajorSecond: IInterval = { distance: 2, name: 'Major Second', abbreviation: 'Major 2nd' }

const MinorThird: IInterval = { distance: 3, name: 'Minor Third', abbreviation: 'Minor 3rd' }

const MajorThird: IInterval = { distance: 4, name: 'Major Third', abbreviation: 'Major 3rd' }

const PerfectFourth: IInterval = { distance: 5, name: 'Perfect Fourth', abbreviation: 'Perfect 4th' }

const Tritone: IInterval = { distance: 6, name: 'Tritone', abbreviation: 'TT' }

const PerfectFifth: IInterval = { distance: 7, name: 'Perfect Fifth', abbreviation: 'Perfect 5th' }

const MinorSixth: IInterval = { distance: 8, name: 'Minor Sixth', abbreviation: 'Minor 6th' }

const MajorSixth: IInterval = { distance: 9, name: 'Major Sixth', abbreviation: 'Major 6th' }

const MinorSeventh: IInterval = { distance: 10, name: 'Minor Seventh', abbreviation: 'Minor 7th' }

const MajorSeventh: IInterval = { distance: 11, name: 'Major Seventh', abbreviation: 'Major 7th' }

const Octave: IInterval = { distance: 12, name: 'Octave', abbreviation: '8ve' }

export const intervals: IIntervals = {MinorSecond, MajorSecond, MinorThird, MajorThird, PerfectFourth, Tritone, PerfectFifth, MinorSixth, MajorSixth, MinorSeventh, MajorSeventh, Octave}