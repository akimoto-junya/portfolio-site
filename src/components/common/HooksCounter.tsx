import React, { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@/modules';
import { counterActions } from '@/modules/counter';

export interface Props {
  count: number;
}

interface AllProps extends Props {
  onIncrement: () => void;
}

const HooksCounter: React.FC = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(
    (state: State): Props => ({
      count: state.counter.count
    })
  );
  const onClickIncrementButton = (event: MouseEvent): void => {
    event.preventDefault();
    dispatch(counterActions.increment(1));
  };

  return (
    <div>
      <p>
        Count:
        {count}
      </p>
      <button type="button" onClick={onClickIncrementButton}>
        increment
      </button>
    </div>
  );
};

export default HooksCounter;
