import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/modules/posts';
import uuid from 'react-uuid';

const PostForm = () => {
  const [postText, setPostText] = useState('');

  const dispatch = useDispatch();

  return (
    <div>
      PostForm
      <form
        onSubmit={(e) => {
          if (!postText) {
            alert('내용을 입력해 주시기 바랍니다.');
            return false;
          } else if (postText.length > 50) {
            alert('띄어쓰기 포함 50자 이하로 작성 부탁드립니다.');
            return false;
          }
          // alert('작성이 완료되었습니다.');

          e.preventDefault();
          setPostText('');

          dispatch(
            addPost({
              id: uuid(),
              text: postText
            })
          );
        }}
      >
        <input
          type="text"
          name="text"
          value={postText}
          onChange={(e) => {
            setPostText(e.target.value);
          }}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default PostForm;
