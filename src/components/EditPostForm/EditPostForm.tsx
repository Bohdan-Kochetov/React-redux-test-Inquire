import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State, Post } from '../../react-app-env';
import './EditPostForm.scss';

export const EditPostForm: React.FC = () => {
  const { posts, selectedPost } = useSelector((state: State) => state.reducerPost);
  const currentPost = posts.find((post: Post) => post.id === selectedPost) || null;
  const [newTitle, changeTitle] = useState(currentPost?.title || '');
  const [newBbody, changeBody] = useState(currentPost?.body || '');
  const dispatch = useDispatch();

  const generateNewPost = () => {
    return {
      type: 'editPost',
      post: [selectedPost, newTitle, newBbody],
    };
  };

  return (
    currentPost && (
      <form className="EditPostForm">
        <div className="form-field">
          <input
            type="text"
            name="title"
            value={newTitle}
            className="EditPostForm__input"
            onChange={event => changeTitle(event.target.value)}
          />
        </div>

        <div className="form-field">
          <input
            type="text"
            name="body"
            value={newBbody}
            className="EditPostForm__input"
            onChange={event => changeBody(event.target.value)}
          />
        </div>

        <button
          type="button"
          className="EditPostForm__submit-button button"
          onClick={() => {
            dispatch(generateNewPost());
          }}
        >
          Add
        </button>
      </form>
    )
  );
};
