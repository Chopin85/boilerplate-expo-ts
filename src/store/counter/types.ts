export interface CounterState {
  counter: number;
}

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const INCREMENT_COUNTER_WITH_VALUE = 'INCREMENT_COUNTER_WITH_VALUE';
export const DECREMENT_COUNTER_WITH_VALUE = 'DECREMENT_COUNTER_WITH_VALUE';
export const SET_COUNTER = 'SET_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';

interface IncrementCounterAction {
  type: typeof INCREMENT_COUNTER;
}
interface DecrementCounterAction {
  type: typeof DECREMENT_COUNTER;
}

interface IncrementCounterWithValue {
  type: typeof INCREMENT_COUNTER_WITH_VALUE;
  payload: number;
}
interface DecrementCounterWithValue {
  type: typeof DECREMENT_COUNTER_WITH_VALUE;
  payload: number;
}
interface setCounterToValue {
  type: typeof SET_COUNTER;
  payload: number;
}
interface ResetCounterAction {
  type: typeof RESET_COUNTER;
}

export type CounterActionTypes =
  | IncrementCounterAction
  | DecrementCounterAction
  | IncrementCounterWithValue
  | DecrementCounterWithValue
  | setCounterToValue
  | ResetCounterAction;
