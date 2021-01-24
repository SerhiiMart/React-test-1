import React from 'react';
import './App.css';
import Movielist from './MovieList';
import Nav from './nav';
import { MovieProvider } from './movielistcontext';

function App() {
  return (
    <MovieProvider>
    <div className="App">
      <Nav />
      <Movielist />
    </div>
    </MovieProvider>
  );
}

export default App;
