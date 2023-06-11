import React from "react";

export default function About() {
  return (
    <div className="about">
      <h1>This is About Page</h1>
      <p>This app is made using react. It is a simple shopping cart app.</p>
      <p>
        It uses redux for state management. It uses react-router-dom for routing
        through various categories.
      </p>
      <p>All the Data and categories are fetched from fakestoreapi.com.</p>
      <p>
        The Post page is a dummy page to show async data fetching in redux.
      </p>{" "}
      <p>
        This app have normal functionality of showing items in each category,
        adding and removing items from the cart. This app was made to show state
        management ability using redux in react
      </p>
    </div>
  );
}
