import { request } from '../api';
import { Comment } from '../react-app-env';

const initialState = {
  comments: [],
};

export function commentsSuccess(comments: any) {
  return {
    type: 'commentsSuccess',
    comments,
  };
}

export function commentsFetchData() {
  return (dispatch : any) => request('comments')
    .then(result => dispatch(commentsSuccess(result)));
}

type CommentDetalils = [number, string];

function createComment(comments: Comment[], value: CommentDetalils) {
  const [postId, comment] = value;

  const idArray = comments.map((item: Comment) => item.id);

  return {
    id: Math.max.apply(null, idArray) + 1,
    postId,
    body: comment,
  };
}

export function reducerComments(state = initialState, action: any) {
  switch (action.type) {
    case 'commentsSuccess':
      return {
        ...state,
        comments: action.comments,
      };
    case 'addComment':
      return {
        ...state,
        comments: [...state.comments, createComment(state.comments, action.comment)],
      };
    default:
      return state;
  }
}
