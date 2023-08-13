// import { createStore } from "redux";  //createStore is depricated
// import { createStore, combineReducers } from "redux"; // use combineReducers in case of multiple reducers avalable  //combine reducers is depricated, before it was used to combine all the reducers
import {
  configureStore,
  applyMiddleware,
  createAsyncThunk,
} from "@reduxjs/toolkit";
// import thunk from 'redux-thunk'
import cartReducer from "./cart";
import postReducer from "./posts";
// import itemReducer from "./items";

// const reducer = combineReducers({
//   //   cartStore(or anyname we like): cartReducer,
//   //   cartReducer,
//   cartReducer: cartReducer,
//   postStore: postReducer,
//   itemStore: itemReducer,
// });

// to access, state.cartReducer.isOpen in case of multiple reducers

// const store = createStore(cartReducer);

const store = configureStore(
  {
    reducer: {
      cartStore: cartReducer,
      postStore: postReducer,
      // itemStore: itemReducer,
    },
  },
  applyMiddleware(createAsyncThunk)
);
// state.isOpen in case of single reducer

export default store;
