import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../axios/api';

// const initialState = [
//   { id: 1, text: 'This is post test <3' },
//   { id: 2, text: 'for detail page test &>>' }
// ];

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: null
};

export const __getPosts = createAsyncThunk('getPosts', async (payload, thunkAPI) => {
  try {
    const response = await api.get('/posts');
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    console.log('error', error);
    return thunkAPI.rejectWithValue(error);
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      return [...state, action.payload];
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return { ...post, text: action.payload.text };
        } else {
          return post;
        }
      });
    }
  },
  extraReducers: {
    [__getPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.posts = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    }
  }
});

export const { addPost, deletePost, updatePost } = postsSlice.actions;
export default postsSlice.reducer;
