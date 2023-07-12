import { createSlice } from '@reduxjs/toolkit';

const initialComments = [{ postId: '', id: '', text: '' }];

const commentSlice = createSlice({
  name: 'comments',
  initialState: initialComments,
  reducers: {
    addComment: (state, action) => {
      return [...state, action.payload];
    },
    deleteComment: (state, action) => {
      return state.filter((comment) => comment.id !== action.payload);
    }
  }
});

export const { addComment, deleteComment } = commentSlice.actions;
export default commentSlice.reducer;
