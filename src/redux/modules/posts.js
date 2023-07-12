import uuid from 'react-uuid';

const initialPosts = [
  { id: uuid(), text: 'This is post test <3' },
  { id: uuid(), text: 'for detail page test &>>' }
];

const posts = (state = initialPosts, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.payload);
    case 'UPDATE_POST':
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return { ...post, text: action.payload.text };
        } else {
          return post;
        }
      });
    default:
      return state;
  }
};

export default posts;
