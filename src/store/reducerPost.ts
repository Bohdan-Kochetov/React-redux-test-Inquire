import { request } from '../api';
import { Post } from '../react-app-env';

const initialState = {
  posts: [],
  selectedPost: 0,
  handleEdit: false,
};

export function postsSuccess(posts: Post[]) {
  return {
    type: 'postsSuccess',
    posts,
  };
}

export function postsFetchData() {
  return (dispatch : any) => request('posts')
    .then(result => dispatch(postsSuccess(result)));
}

export function deletePost(postId: number) {
  return {
    type: 'deletePost',
    postId,
  };
}

export function selectPost(postId: number) {
  return {
    type: 'change',
    postId,
  };
}

export function EditPost() {
  return {
    type: 'edit',
  };
}

type NewPost = [number, string, string];

function addEditPost(posts: Post[], newPost: NewPost) {
  const [id, title, body] = newPost;

  const newPosts = posts.filter((post: Post) => post.id !== id);

  return [...newPosts, { id, title, body }];
}

type PostDetalils = [string, string];

function createPost(posts: Post[], value: PostDetalils) {
  const [title, body] = value;

  const idArray = posts.map((post: Post) => post.id);

  return {
    id: Math.max.apply(null, idArray) + 1,
    title,
    body,
  };
}

export function reducerPost(state = initialState, action: any) {
  switch (action.type) {
    case 'postsSuccess':
      return {
        ...state,
        posts: action.posts,
      };
    case 'addPost':
      return {
        ...state,
        posts: [...state.posts, createPost(state.posts, action.post)],
      };
    case 'deletePost':
      return {
        ...state,
        posts: state.posts.filter((post: Post) => post.id !== action.postId),
      };
    case 'edit':
      return {
        ...state,
        handleEdit: !state.handleEdit,
      };
    case 'editPost':
      return {
        ...state,
        posts: addEditPost(state.posts, action.post),
      };
    case 'change':
      if (action.postId === state.selectedPost) {
        return {
          ...state,
          selectedPost: 0,
        };
      }

      return {
        ...state,
        selectedPost: action.postId,
      };

    default:
      return state;
  }
}
