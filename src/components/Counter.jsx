import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, TextField, Typography } from '@mui/material';

import { increase, decrease, setDiff } from '@/modules/counter';

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  return (
    <>
      <Typography variant="h5">{number}</Typography>
      <TextField
        type="number"
        min="1"
        label="diff"
        value={diff}
        onChange={onSetDiff}
      />
      <Button variant="contained" onClick={onIncrease}>
        +
      </Button>
      <Button variant="contained" onClick={onDecrease}>
        -
      </Button>
    </>
  );
}

function CounterContainer() {
  // store.getState
  const state = useSelector((state) => state.counter);

  // store.dispatch
  const dispatch = useDispatch();

  const { number, diff } = state;

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (e) => dispatch(setDiff(parseInt(e.target.value)));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
