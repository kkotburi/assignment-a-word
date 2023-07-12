import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../redux/modules/posts';
import CommentForm from '../components/comments/CommentForm';
import CommentList from '../components/comments/CommentList';
import axios from 'axios';
import api from '../axios/api';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // const posts = useSelector((state) => state.posts);
  // const post = posts.find((post) => `${post.id}` === id);

  const [editPostText, setEditPostText] = useState('');

  const dispatch = useDispatch();

  // axios get
  const [post, setPost] = useState('');

  const fetchPosts = async () => {
    const { data } = await api.get('/posts');
    setPost(data.find((post) => `${post.id}` === id));
  };

  const onSubmitUpdatePost = async () => {
    api.patch(`/posts/${id}`, {
      text: editPostText
    });
    setPost({ ...post, text: editPostText });
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  // axios fetch

  return (
    <div>
      <button onClick={() => navigate('/')}>home</button>
      <br />
      Detail
      <div>{post.id}</div>
      <div>{post.text}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (editPostText === '') {
            alert('내용을 입력해 주시기 바랍니다.');
            return false;
          } else if (editPostText.length > 50) {
            alert('띄어쓰기 포함 50자 이하로 작성 부탁드립니다.');
            return false;
          }
          // alert('수정이 완료되었습니다.');

          dispatch(
            updatePost({
              id: post.id,
              text: editPostText
            })
          );

          setEditPostText('');

          // axios fetch
          onSubmitUpdatePost();
          // axios fetch
        }}
      >
        <input
          type="text"
          name="text"
          value={editPostText}
          onChange={(e) => {
            setEditPostText(e.target.value);
          }}
        />
        <button type="submit">edit</button>
      </form>
      <CommentForm />
      <CommentList />
    </div>
  );
};

export default Detail;
