import React from "react";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../Redux/cartSlice";

const ChangeQuantity = ({ quantity, itemId }) => {
  const dispatch = useDispatch();

  const addQuantity = () => {
    dispatch(changeQuantity({ itemId, quantity: quantity + 1 }));
  };

  const removeQuantity = () => {
    if (quantity <= 1) return;
    dispatch(changeQuantity({ itemId, quantity: quantity - 1 }));
  };

  return (
    <div>
      <button onClick={addQuantity}>+</button>
      <span>{quantity}</span>
      <button onClick={removeQuantity}>-</button>
    </div>
  );
};

export default ChangeQuantity;
