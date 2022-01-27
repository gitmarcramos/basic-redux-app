const INITIAL_STATE = {
  cart: 0,
};

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDTOCART":
      return {
        ...state,
        cart: Number(action.payload) + state.cart,
      };
  }
  return state;
}
