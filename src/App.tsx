import React, { useState } from 'react';
import { Link } from './Link';
import { Counter } from './Counter';

function MyApp(): JSX.Element {
  const [value, setValue] = useState(0);
  const handleIncrement = () => setValue(value + 1);
  const handleDecrement = () => setValue(value - 1);

  return (
    <div>
      <h1>A simple clicker for testing purposes</h1>
      <Link source="https://github.com/kostaslib/delightful-clicker">Github</Link>
      <Counter
        value={value}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}
export default MyApp;
