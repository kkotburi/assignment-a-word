import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../axios/api';

const CommentList = () => {
  const { id } = useParams();

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

  return (
    <div>
      CommentList
      {comments?.map((comment) => {
        return (
          <div key={comment.id}>
            <div>{comment.id}</div>
            <div>{comment.text}</div>
            <button onClick={() => onClickDeletePost(comment.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
