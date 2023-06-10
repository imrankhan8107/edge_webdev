import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchItemsData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
};

const fetchData = createAsyncThunk(
  "posts/fetchPosts",
  // Declare the type your function argument here:
  async (thunkAPI) => {
    try {
      const postData = await fetchItemsData();
      return postData;
    } catch (error) {
      // You can also dispatch additional actions or handle errors here
      thunkAPI.rejectWithValue(error.message);
    }
  }
);


const itemSlice = createSlice({
  name: "items",
  initialState: {
    allItems: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default itemSlice.reducer;
export { fetchData };
