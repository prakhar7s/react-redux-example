import counterActionTypes from "./counter.types";

export const incrementCounter = (number) => ({
  type: counterActionTypes.INCREMENT,
  payload: number,
});

export const decrementCounter = (number) => ({
  type: counterActionTypes.DECREMENT,
  payload: number,
});
