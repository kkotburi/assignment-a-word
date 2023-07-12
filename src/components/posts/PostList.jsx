import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost } from '../../redux/modules/posts';

const PostList = () => {
  const posts = useSelector((state) => {
    return state.posts;
  });

  const dispatch = useDispatch();

  return (
    <div>
      PostList
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/${post.id}`}>detail</Link>
            <div>{post.id}</div>
            <div>{post.text}</div>
            <button
              onClick={() => {
                dispatch(deletePost(post.id));
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
