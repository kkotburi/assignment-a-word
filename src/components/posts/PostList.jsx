import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../axios/api';

const PostList = () => {
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

  return (
    <div>
      PostList
      {posts?.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/${post.id}`}>detail</Link>
            <div>{post.id}</div>
            <div>{post.text}</div>
            <button onClick={() => onClickDeletePost(post.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
