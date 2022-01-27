const INITIAL_STATE = {
  count: 0,
};

export default function countReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "DECR":
      return {
        ...state,
        count: Number(state.count - 1),
      };
    case "INCR":
      return {
        ...state,
        count: Number(state.count + 1),
      };
  }
  return state;
}
