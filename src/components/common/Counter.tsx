import React, { MouseEvent } from 'react';

export interface StateProps {
  count: number;
}

export interface DispatchProps {
  onIncrement: Function;
}

type AllProps = StateProps & DispatchProps;

const Counter: React.FC<AllProps> = props => {
  const { count, onIncrement } = props;
  const onClickIncrementButton = (event: MouseEvent): void => {
    event.preventDefault();
    onIncrement(1);
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

export default Counter;
