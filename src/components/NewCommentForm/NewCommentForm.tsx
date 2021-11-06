import React, { useState } from 'react';
import './NewCommentForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../react-app-env';

export const NewCommentForm: React.FC = () => {
  const [comment, changeComment] = useState('');
  const { selectedPost } = useSelector((state: State) => state.reducerPost);
  const dispatch = useDispatch();

  const generateComment = () => {
    return {
      type: 'addComment',
      comment: [selectedPost, comment],
    };
  };

  return (
    <form className="NewCommentForm">
      <div className="form-field">
        <textarea
          name="body"
          value={comment}
          required
          placeholder="Type comment here"
          className="NewCommentForm__input"
          onChange={event => changeComment(event.target.value)}
        />
      </div>

      <button
        type="button"
        className="NewCommentForm__submit-button button"
        onClick={() => {
          if (comment !== '') {
            dispatch(generateComment());
            changeComment('');
          }
        }}
      >
        Add a comment
      </button>
    </form>
  );
};
