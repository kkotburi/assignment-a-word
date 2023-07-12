import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteComment } from '../../redux/modules/comments';
import axios from 'axios';
import api from '../../axios/api';

const CommentList = () => {
  const { id } = useParams();

  // const comments = useSelector((state) => {
  //   return state.comments;
  // });
  // const filterdComments = comments.filter((comment) => {
  //   return comment.postId === id;
  // });
  // const dispatch = useDispatch();

  // axios get
  const [comments, setComments] = useState(null);

  const fetchComments = async () => {
    const { data } = await api.get('/comments');
    setComments(data.filter((comment) => `${comment.postId}` === id));
  };

  const onClickDeletePost = async (id) => {
    api.delete(`/comments/${id}`);
    setComments(
      comments.filter((comment) => {
        return comment.id !== id;
      })
    );
  };

  useEffect(() => {
    fetchComments();
  }, []);
  // axios delete

  return (
    <div>
      CommentList
      {comments?.map((comment) => {
        return (
          <div key={comment.id}>
            <div>{comment.id}</div>
            <div>{comment.text}</div>
            <button
              // onClick={() => {
              //   dispatch(deleteComment(comment.id));
              // }}

              // axios delete
              onClick={() => onClickDeletePost(comment.id)}
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

export default CommentList;
