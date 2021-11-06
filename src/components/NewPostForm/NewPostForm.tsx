import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './NewPostForm.scss';

export const NewPostForm: React.FC = () => {
  const [title, changeTitle] = useState('');
  const [body, changeBody] = useState('');
  const dispatch = useDispatch();

  const generatePost = () => {
    return {
      type: 'addPost',
      post: [title, body],
    };
  };

  return (
    <form className="NewPostForm">
      <div className="form-field">
        <input
          type="text"
          name="title"
          value={title}
          required
          placeholder="Your title"
          className="NewPostForm__input"
          onChange={event => changeTitle(event.target.value)}
        />
      </div>

      <div className="form-field">
        <input
          type="text"
          name="body"
          value={body}
          required
          placeholder="Your body"
          className="NewPostForm__input"
          onChange={event => changeBody(event.target.value)}
        />
      </div>

      <button
        type="submit"
        className="NewPostForm__submit-button button"
        onClick={() => {
          if (body !== '' && title !== '') {
            dispatch(generatePost());
            changeBody('');
            changeTitle('');
          }
        }}
      >
        Add
      </button>
    </form>
  );
};
