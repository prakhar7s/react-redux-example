import counterActionTypes from "./counter.types";

const initialCounter = {
  number: 0,
};

export default function counterReducer(state = initialCounter, action) {
  switch (action.type) {
    case counterActionTypes.INCREMENT:
      return {
        ...state,
        number: action.payload + 1,
      };
    case counterActionTypes.DECREMENT:
      return {
        ...state,
        number: action.payload - 1,
      };
    default:
      return {
        ...state,
      };
  }
}
