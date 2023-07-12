import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../axios/api';
import { useDispatch, useSelector } from 'react-redux';
import { __getPosts, deletePost } from '../../redux/modules/posts';

const PostList = () => {
  // const [filterdPosts, setFilterdPosts] = useState('');

  // const fetchPosts = async () => {
  //   const { data } = await api.get('/posts');
  //   setPosts(data);
  // };

  // const onClickDeletePost = async (id) => {
  //   api.delete(`/posts/${id}`);
  //   setFilterdPosts(
  //     posts.filter((post) => {
  //       return post.id !== id;
  //     })
  //   );
  // };

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  // thunk
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPosts());
  }, []);

  const { posts, isLoading, error } = useSelector((state) => {
    return state.posts;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.massage}</div>;
  }
  // thunk

  return (
    <div>
      PostList
      {posts?.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/${post.id}`}>detail</Link>
            <div>{post.id}</div>
            <div>{post.text}</div>
            {/* <button onClick={() => onClickDeletePost(post.id)}>delete</button> */}
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
