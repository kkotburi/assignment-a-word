import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CommentList = () => {
  const { id } = useParams();

  const comments = useSelector((state) => {
    return state.comments;
  });
  const filterdComments = comments.filter((comment) => {
    return comment.postId === id;
  });

  const dispatch = useDispatch();

  return (
    <div>
      CommentList
      {filterdComments.map((comment) => {
        return (
          <div key={comment.id}>
            <div>{comment.id}</div>
            <div>{comment.text}</div>
            <button
              onClick={() => {
                dispatch({
                  type: 'DELETE_COMMENT',
                  payload: comment.id
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

export default CommentList;
