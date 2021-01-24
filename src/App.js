import React from 'react';
import './App.css';
import Movielist from './MovieList';
import Nav from './nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Movielist />
    </div>
  );
}

export default App;
