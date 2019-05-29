import React, { FC } from 'react';

interface IProps {
  value: number;
  onIncrement: (e: any) => void;
  onDecrement: (e: any) => void;
}

export const Counter: FC<IProps> = props => {
  const { value, onDecrement, onIncrement } = props;
  return (
    <div>
      <h2>{value}</h2>
      <button id="decrement" onClick={onDecrement}>-</button>
      <button id="increment" onClick={onIncrement}>+</button>
    </div>
  );
};
