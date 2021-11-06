import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Post, State, Comment } from '../../react-app-env';
import { NewCommentForm } from '../NewCommentForm';
import { EditPostForm } from '../EditPostForm';
import { EditPost } from '../../store/reducerPost';

import './PostDetails.scss';

export const PostDetails: React.FC = () => {
  const { posts, selectedPost, handleEdit } = useSelector((state: State) => state.reducerPost);
  const { comments } = useSelector((state: State) => state.reducerComments);
  const currentPost = posts.find((post: Post) => post.id === selectedPost) || null;
  const currentComemnts = comments.filter((comment: Comment) => comment.postId === selectedPost);
  const dispatch = useDispatch();

  return (
    <div className="PostDetails">
      <h2>{currentPost?.title}</h2>

      <section className="PostDetails__post">
        {currentPost && (
          currentPost.body ? (<p>{currentPost.body}</p>) : 'There is no body in this Post'
        )}
        {}
      </section>
      <button
        type="button"
        className="PostsList__button button"
        onClick={() => dispatch(EditPost())}
      >
        Edit post
      </button>
      {handleEdit && (
        <EditPostForm />
      )}

      <section className="PostDetails__comments">
        {currentComemnts.length ? (
          currentComemnts.map((comment: any) => {
            const { body, id } = comment;

            return (
              <li key={id} className="PostDetails__list-item">
                <h4>{`Comment ID #${id}`}</h4>
                <p>{body}</p>
              </li>
            );
          })
        ) : 'There is no comment'}
        <ul className="PostDetails__list" />
      </section>

      <section>
        <h2>Add Comment</h2>
        <div className="PostDetails__form-wrapper">
          <NewCommentForm />
        </div>
      </section>
    </div>
  );
};
