import { createSlice } from '@reduxjs/toolkit';

const ADD_POST = 'posts/ADD_POST';
const DELETE_POST = 'posts/DELETE_POST';
const UPDATE_POST = 'posts/UPDATE_POST';

// export const addPost = (newPost) => {
//   return {
//     type: ADD_POST,
//     payload: newPost
//   };
// };

// export const deletePost = (postId) => {
//   return {
//     type: DELETE_POST,
//     payload: postId
//   };
// };

// export const updatePost = (editPost) => {
//   return {
//     type: UPDATE_POST,
//     payload: editPost
//   };
// };

const initialPosts = [
  { id: 1, text: 'This is post test <3' },
  { id: 2, text: 'for detail page test &>>' }
];

// const posts = (state = initialPosts, action) => {
//   switch (action.type) {
//     case ADD_POST:
//       return [...state, action.payload];
//     case DELETE_POST:
//       return state.filter((post) => post.id !== action.payload);
//     case UPDATE_POST:
//       return state.map((post) => {
//         if (post.id === action.payload.id) {
//           return { ...post, text: action.payload.text };
//         } else {
//           return post;
//         }
//       });
//     default:
//       return state;
//   }
// };

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialPosts,
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
  }
});

export const { addPost, deletePost, updatePost } = postsSlice.actions;
export default postsSlice.reducer;
