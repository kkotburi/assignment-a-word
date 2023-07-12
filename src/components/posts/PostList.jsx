import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost } from '../../redux/modules/posts';
import axios from 'axios';
import api from '../../axios/api';

const PostList = () => {
  // const posts = useSelector((state) => state.posts);
  // const dispatch = useDispatch();

  // axios get
  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    const { data } = await api.get('/posts');
    setPosts(data);
  };

  const onClickDeletePost = async (id) => {
    api.delete(`/posts/${id}`);
    setPosts(
      posts.filter((post) => {
        return post.id !== id;
      })
    );
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  // axios delete

  return (
    <div>
      PostList
      {posts?.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/${post.id}`}>detail</Link>
            <div>{post.id}</div>
            <div>{post.text}</div>
            <button
              // onClick={() => {
              //   dispatch(deletePost(post.id));
              // }}

              // axios delete
              onClick={() => onClickDeletePost(post.id)}
              // axios delete
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
