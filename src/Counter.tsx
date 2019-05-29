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
      <p>{value}</p>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};
