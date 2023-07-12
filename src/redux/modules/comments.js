export const ADD_COMMENT = 'comments/ADD_COMMENT';
const DELETE_COMMENT = 'comments/DELETE_COMMENT';

export const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment
  };
};

export const deleteComment = (commentId) => {
  return {
    type: DELETE_COMMENT,
    payload: commentId
  };
};

const initialComments = [{ postID: '', id: '', text: '' }];

const comments = (state = initialComments, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    case DELETE_COMMENT:
      return state.filter((comment) => comment.id !== action.payload);
    default:
      return state;
  }
};

export default comments;
