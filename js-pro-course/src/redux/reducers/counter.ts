import {AnyAction} from "redux";

export interface ICounterState {
  value: number;
};

const defaultState: ICounterState = {
  value: 0
};

export const counterReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case 'increment':
      return { value: state.value + 1 };
    case 'decrement':
      return { value: state.value - 1 };
    case 'setToNumber':
      return { value: action.value};
    default:
      return state;
  };
};