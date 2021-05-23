import React, { useState } from 'react';
import useGetIntervalNote from '../hooks/useGetIntervalNote';
import useGetRandomNote from '../hooks/useGetRandomNote';
import { IInterval, intervalArr } from '../types/Interval';
import { Note } from '../types/Note';

interface IIntervalTrainingProps{}

const IntervalTraining = (props: IIntervalTrainingProps) => { 
  const getRandomNote = useGetRandomNote();
  const {getAscending} = useGetIntervalNote();
  const [randomNote, setRandomNote] = useState<Note>(getRandomNote());
  const [currentInterval, setCurrentInterval] = useState<IInterval>();

  const intervalButtons: JSX.Element[] = intervalArr.map((interval: IInterval) => {
    return (
      <div key = {interval.abbreviation}>
        <button onClick = {(e: React.MouseEvent<HTMLButtonElement>) => {e.preventDefault(); setCurrentInterval(interval)}}>{interval.name}</button>
      </div>
    );
  });

  return (
    <div>
      <div>{randomNote.Abbreviation}</div>
      <div>{currentInterval ? getAscending(randomNote, currentInterval).Abbreviation : ''}</div>
      <div>
        <button onClick = {(e: React.MouseEvent<HTMLButtonElement>) => {e.preventDefault(); setRandomNote(getRandomNote())}}>New Starting Note</button>
      </div>

      {intervalButtons}
    </div>
  )
}

export default IntervalTraining;