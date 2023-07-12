import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/modules/posts';
import uuid from 'react-uuid';
import axios from 'axios';
import api from '../../axios/api';

const PostForm = () => {
  // const [postText, setPostText] = useState('');
  // const dispatch = useDispatch();

  // axios post
  const [postText, setPostText] = useState({
    text: ''
  });

  const onSubmitAddPost = () => {
    api.post('/posts', postText);
    // setPosts([...posts, postText]);
    // fetchPosts();
  };
  // axios post

  return (
    <div>
      PostForm
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!postText.text) {
            alert('내용을 입력해 주시기 바랍니다.');
            return false;
          } else if (postText.text.length > 50) {
            alert('띄어쓰기 포함 50자 이하로 작성 부탁드립니다.');
            return false;
          }
          // alert('작성이 완료되었습니다.');

          // dispatch(
          //   addPost({
          //     id: uuid(),
          //     text: postText
          //   })
          // );

          // setPostText('');

          // axios post
          onSubmitAddPost();
          // axios post
        }}
      >
        <input
          type="text"
          name="text"
          value={postText.title}
          onChange={(e) => {
            setPostText({ text: e.target.value });
          }}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default PostForm;
