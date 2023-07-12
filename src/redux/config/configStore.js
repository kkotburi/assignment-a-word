import posts from '../modules/posts';
import comments from '../modules/comments';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    posts,
    comments
  }
});

export default store;
