import React, { useState } from 'react';
import api from '../../axios/api';

const PostForm = () => {
  const [postText, setPostText] = useState({
    text: ''
  });

  const onSubmitAddPost = () => {
    api.post('/posts', postText);
    // setPosts([...posts, postText]);
    // fetchPosts();
  };

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

          onSubmitAddPost();
          setPostText('');
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
