import { combineReducers, createStore } from 'redux';
import posts from '../modules/posts';
import comments from '../modules/comments';

const roodReducer = combineReducers({
  posts,
  comments
});

const store = createStore(roodReducer);

export default store;
