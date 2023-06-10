import React from "react";
import { useParams } from "react-router";
import { getItems } from "../dummy-data/index";
import "../styles/Items.css";
import { AddRemoveButton } from "../Components";

export default function Items() {
  const { category } = useParams();
  const items = getItems(category);
  return (
    <div className="items">
      {/* <h1>This is Items Page, {category}</h1> */}
      {items.map((item) => {
        return (
          <div className="item" key={item.id}>
            <img src={item.image} alt={item.title} className="item-image" />
            <span>
              <p>{item.title}</p>
              <div className="item-price">Price: {item.price}$</div>
              <AddRemoveButton item={item} />
            </span>
          </div>
        );
      })}
    </div>
  );
}
