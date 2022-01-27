import React from "react";

//redux
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => ({ ...state.countReducer }));

  const decrFunc = () => {
    dispatch({
      type: "DECR",
    });
  };

  const incrFunc = () => {
    dispatch({
      type: "INCR",
    });
  };

  return (
    <div>
      <h1>The count is: {count}</h1>
      <button onClick={count > 0 ? decrFunc : null}>-1</button>
      <button onClick={incrFunc}>+1</button>
    </div>
  );
}
