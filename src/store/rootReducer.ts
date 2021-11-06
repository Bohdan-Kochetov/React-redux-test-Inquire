import { combineReducers } from 'redux';
import { reducerPost } from './reducerPost';
import { reducerComments } from './reducerComments';

export const rootReducer = combineReducers({
  reducerPost,
  reducerComments,
});
