import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
                dispatch({
                  type: 'DELETE_POST',
                  payload: post.id
                });
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
