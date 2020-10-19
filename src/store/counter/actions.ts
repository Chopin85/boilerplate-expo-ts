import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  INCREMENT_COUNTER_WITH_VALUE,
  DECREMENT_COUNTER_WITH_VALUE,
  RESET_COUNTER,
  SET_COUNTER,
  CounterActionTypes
} from './types';

export const incrementCounter = (): CounterActionTypes => {
  return {
    type: INCREMENT_COUNTER
  };
};

export const decrementCounter = (): CounterActionTypes => {
  return {
    type: DECREMENT_COUNTER
  };
};

export const incrementCounterWithValue = (
  value: number
): CounterActionTypes => {
  return {
    type: INCREMENT_COUNTER_WITH_VALUE,
    payload: value
  };
};

export const decrementCounterWithValue = (
  value: number
): CounterActionTypes => {
  return {
    type: DECREMENT_COUNTER_WITH_VALUE,
    payload: value
  };
};

export const setCounterToValue = (value: number): CounterActionTypes => {
  return {
    type: SET_COUNTER,
    payload: value
  };
};

export const resetCounter = (): CounterActionTypes => {
  return {
    type: RESET_COUNTER
  };
};
