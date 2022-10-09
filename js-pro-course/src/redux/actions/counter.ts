import {ACTIONS} from "../constants";

export const increment = () => {
  return {
    type: ACTIONS.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: ACTIONS.DECREMENT,
  };
};