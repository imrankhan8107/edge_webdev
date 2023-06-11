import React from "react";
import "../styles/Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../store/cart";
import AddRemoveButton from "./AddRemoveButton";

export default function Cart() {
  const { isOpen, items } = useSelector((state) => state.cartStore);
  const dispatch = useDispatch();
  const cartItemsId = Object.keys(items);

  const totalCost = cartItemsId.reduce((total, id) => {
    return total + items[id].price * items[id].quantity;
  }, 0);

  const bodyUI = () => {
    if (cartItemsId.length <= 0) {
      return <h2>YOUR CART IS EMPTY</h2>;
    } else {
      return (
        <div className="cart-items">
          {cartItemsId.map((id) => {
            return (
              <div className="cart-item">
                <div className="cart-item-details">
                  <span className="cart-item-title">{items[id].title}</span>
                  <span className="cart-item-price">{items[id].price} $</span>
                  <span className="cart-item-total">
                    Total : {Math.round(items[id].price * items[id].quantity)} $
                  </span>
                </div>
                <AddRemoveButton item={items[id]} />
              </div>
            );
          })}
          <h1>Total Cost: {totalCost}</h1>
        </div>
      );
    }
  };
  return (
    <>
      <div className="cart" style={{ display: isOpen ? "block" : "none" }}>
        <div>
          <span
            className="close-cart"
            onClick={() => {
              dispatch(toggleCart(!isOpen));
            }}
          >
            X
          </span>
          <h1 className="cart-heading">Your Cart</h1>
        </div>
        {bodyUI()}
        <button
          className="cart-button"
          onClick={() => {
            dispatch(toggleCart(!isOpen));
          }}
        >
          Close Cart
        </button>
      </div>
    </>
  );
}
