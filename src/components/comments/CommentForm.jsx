import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import { addComment } from '../../redux/modules/comments';
import axios from 'axios';
import api from '../../axios/api';

const CommentForm = () => {
  const { id } = useParams();

  // const [commentText, setCommentText] = useState('');
  // const dispatch = useDispatch();

  // axios post
  const [commentText, setCommentText] = useState({
    postId: id,
    text: ''
  });

  const onSubmitAddComment = () => {
    api.post('/comments', commentText);
    // setComments([...commets, commetnText]);
    // fetchComments();
  };

  // axios post

  return (
    <div>
      CommentForm
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!commentText) {
            alert('내용을 입력해 주시기 바랍니다.');
            return false;
          } else if (commentText.length > 50) {
            alert('띄어쓰기 포함 50자 이하로 작성 부탁드립니다.');
            return false;
          }
          // alert('댓글이 작성되었습니다.');

          // dispatch(
          //   addComment({
          //     postId: id,
          //     id: uuid(),
          //     text: commentText
          //   })
          // );
          // setCommentText('');

          // axios post
          onSubmitAddComment();
          // axios post
        }}
      >
        <input
          type="text"
          name="text"
          value={commentText.text}
          onChange={(e) => {
            setCommentText({ postId: id, text: e.target.value });
          }}
        />
        <button>done</button>
      </form>
    </div>
  );
};

export default CommentForm;
