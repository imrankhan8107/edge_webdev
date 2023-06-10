import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const GET_POSTS = "posts/GET_POSTS";

// export const getPosts = () => {
//   return async (dispatch, getState) => {
//     console.log(getState(), "State Value");
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     if (data) {
//       dispatch({ type: GET_POSTS, payload: data });
//     }
//   };
// };

// export default function reducer(
//   state = {
//     posts: [],
//   },
//   action
// ) {
//   switch (action.type) {
//     case GET_POSTS:
//       return {
//         ...state,
//         posts: action.payload,
//       };
//     default:
//       return state;
//   }
// }

const fetchPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  // Declare the type your function argument here:
  async (thunkAPI) => {
    try {
      const postData = await fetchPostsData();
      return postData;
    } catch (error) {
      // You can also dispatch additional actions or handle errors here
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: "todos",
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default postSlice.reducer;
export { fetchPosts };
