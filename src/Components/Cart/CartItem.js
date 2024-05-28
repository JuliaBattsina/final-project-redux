import React from "react";
import ChangeQuantity from "./ChangeQuantity";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <li className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <ChangeQuantity quantity={item.quantity} itemId={item.id} />
        <button onClick={handleRemoveItem}>Remove</button>
      </div>
    </li>
  );
}

export default CartItem;
