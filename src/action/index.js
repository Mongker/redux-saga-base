import { UP, DOWN } from "./actionTypes";

// Action tÄng giÃ¡ trá»
export const actionUp = (step) => {
  debugger; // Todo by MongLV
  return {
    type: UP,
    step: step
  };
};

// Action giáº£m giÃ¡ trá»
export const actionDown = (step) => {
  return {
    type: DOWN,
    step: step
  };
};
