import React from 'react';
import './App.css';
import CommentsListContainer from './containers/CommentsListContainer';
import DevTools from './DevTools';

const App = () => {
  return (
    <div className="App">
      <CommentsListContainer />
      <DevTools />
    </div>
  );
};

export default App;