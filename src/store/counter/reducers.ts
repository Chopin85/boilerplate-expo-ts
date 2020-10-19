import {
  CounterState,
  CounterActionTypes,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  INCREMENT_COUNTER_WITH_VALUE,
  DECREMENT_COUNTER_WITH_VALUE,
  SET_COUNTER,
  RESET_COUNTER
} from './types';

const initialState: CounterState = {
  counter: 0
};

export const counterReducer = (
  state = initialState,
  action: CounterActionTypes
): CounterState => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - 1 };
    case INCREMENT_COUNTER_WITH_VALUE:
      return { ...state, counter: state.counter + action.payload };
    case DECREMENT_COUNTER_WITH_VALUE:
      return { ...state, counter: state.counter - action.payload };
    case SET_COUNTER:
      return { ...state, counter: action.payload };
    case RESET_COUNTER:
      return initialState;
    default:
      return state;
  }
};
