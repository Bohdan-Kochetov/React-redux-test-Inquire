import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsFetchData } from './store/reducerPost';
import { commentsFetchData } from './store/reducerComments';
import './App.scss';
import { PostDetails } from './components/PostDetails';
import { PostsList } from './components/PostsList';
import { NewPostForm } from './components/NewPostForm';
import { State } from './react-app-env';

const App: React.FC = () => {
  const { selectedPost } = useSelector((state: State) => state.reducerPost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsFetchData());
  }, []);

  useEffect(() => {
    dispatch(commentsFetchData());
  }, []);

  return (
    <>
      <div className="App">
        <header className="App__header">
          <h2>List of Posts</h2>
        </header>

        <main className="App__main">
          <div className="App__sidebar">
            <PostsList />
          </div>

          <div className="App__content">
            <h2>Create new Post</h2>
            <NewPostForm />
            {selectedPost ? <PostDetails /> : <h2>Open Post details</h2>}

          </div>
        </main>
      </div>
    </>
  );
};

export default App;
