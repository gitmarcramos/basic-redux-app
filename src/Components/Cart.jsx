import React, { useState } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  //reducer state
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => ({ ...state.cartReducer }));

  const addToCartFunc = () => {
    dispatch({
      type: "ADDTOCART",
      payload: cartData,
    });
  };

  //component state
  const [cartData, setCartData] = useState(0);

  const handleCartData = (e) => {
    setCartData(e.target.value);
  };

  return (
    <div>
      <h1>Your cart contains {cart} items</h1>
      <input type="number" value={cartData} onInput={handleCartData} />
      <br />
      <button onClick={addToCartFunc}>Add to cart</button>
    </div>
  );
}
