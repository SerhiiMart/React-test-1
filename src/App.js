import React from 'react';
import './App.css';
import Movielist from './MovieList';
import Nav from './nav';
import AddMovie from './addmovies';
import { MovieProvider } from './movielistcontext';

function App() {
  return (
    <MovieProvider>
    <div className="App">
      <Nav />
      <Movielist />
      <AddMovie />
    </div>
    </MovieProvider>
  );
}

export default App;
