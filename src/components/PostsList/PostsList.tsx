import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Post, State } from '../../react-app-env';
import './PostsList.scss';
import { deletePost, selectPost } from '../../store/reducerPost';

export const PostsList: React.FC = () => {
  const { posts, selectedPost } = useSelector((state: State) => state.reducerPost);
  const dispatch = useDispatch();

  return (
    <div className="PostsList">
      <h2>Posts:</h2>

      <ul className="PostsList__list">
        {posts.map((post: Post) => {
          const { title, id } = post;

          return (
            <li key={id} className="PostsList__item">
              <h4>{title}</h4>
              <div className="PostsList__buttons">
                <button
                  type="button"
                  className="PostsList__button button"
                  onClick={() => dispatch(selectPost(id))}
                >
                  {(selectedPost === id) ? 'Close' : 'Open'}
                </button>
                <button
                  type="button"
                  className="PostsList__button button"
                  onClick={() => dispatch(deletePost(id))}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
