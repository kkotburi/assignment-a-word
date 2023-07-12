import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import { addComment } from '../../redux/modules/comments';

const CommentForm = () => {
  const { id } = useParams();

  const [commentText, setCommentText] = useState('');

  const dispatch = useDispatch();

  return (
    <div>
      CommentForm
      <form
        onSubmit={(e) => {
          if (!commentText) {
            alert('내용을 입력해 주시기 바랍니다.');
            return false;
          } else if (commentText.length > 50) {
            alert('띄어쓰기 포함 50자 이하로 작성 부탁드립니다.');
            return false;
          }
          // alert('댓글이 작성되었습니다.');

          e.preventDefault();
          setCommentText('');

          dispatch(
            addComment({
              postId: id,
              id: uuid(),
              text: commentText
            })
          );
        }}
      >
        <input
          type="text"
          name="text"
          value={commentText}
          onChange={(e) => {
            setCommentText(e.target.value);
          }}
        />
        <button>done</button>
      </form>
    </div>
  );
};

export default CommentForm;
