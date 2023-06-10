import { createSlice } from "@reduxjs/toolkit";

// // Action types
// const TOGGLE_CART = "cart/TOGGLE_CART";
// const ADD_TO_CART = "cart/ADD_TO_CART";

// //Actions
// export const toggleCart = (isOpen) => {
//   return {
//     type: TOGGLE_CART,
//     payload: isOpen,
//   };
// };

// export const addToCart = (item) => {
//   return {
//     type: ADD_TO_CART,
//     payload: item,
//   };
// };

// // Reducer
// export default function reducer(
//   state = {
//     isOpen: false,
//     items: {},
//   },
//   action
// ) {
//   switch (action.type) {
//     case TOGGLE_CART:
//       return {
//         ...state,
//         isOpen: action.payload,
//       };
//     case ADD_TO_CART:
//       const { id, ...data } = action.payload;
//       return {
//         ...state,
//         items: {
//           ...state.items,
//           [id]: {
//             id: id,
//             ...data,
//             quantity: state.items[id] ? state.items[id].quantity + 1 : 1,
//           },
//         },
//       };
//     default:
//       return state;
//   }
// }

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    items: {},
  },
  reducers: {
    toggleCart: (state, action) => {
      state.isOpen = action.payload;
    },
    addToCart: (state, action) => {
      const { id, ...data } = action.payload;
      state.items[id] = {
        id: id,
        ...data,
        quantity: state.items[id] ? state.items[id].quantity + 1 : 1,
      };
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.items[id].quantity -= 1;
      if (state.items[id].quantity === 0) {
        delete state.items[id];
      }
    },
  },
});

export const { toggleCart, addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
