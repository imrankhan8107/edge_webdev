import React from "react";
import { addToCart, removeFromCart } from "../store/cart";
import { useDispatch, useSelector } from "react-redux";

export default function AddRemoveButton({ item }) {
  const { items } = useSelector((state) => state.cartStore);
  //   console.log(items);
  const dispatch = useDispatch();
  if (items[item.id]) {
    return (
      <div>
        <button
          className="add-remove-btn"
          onClick={() => {
            dispatch(removeFromCart(item));
          }}
        >
          -
        </button>
        <span>{items[item.id].quantity}</span>
        <button
          className="add-remove-btn"
          onClick={() => {
            dispatch(addToCart(item));
          }}
        >
          +
        </button>
      </div>
    );
  } else {
    return (
      <button
        className="add-remove-btn"
        onClick={() => {
          dispatch(addToCart(item));
        }}
      >
        Add to Cart
      </button>
    );
  }
}
