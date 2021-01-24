import React, {useContext} from 'react';
import './App.css';
import { Movielistcontext } from './movielistcontext';

const Nav = () => {
  const [movies, setMovies] = useContext(Movielistcontext);
  return (
    <div className="navL">
    <h3>Serhii Inc.</h3>
    <p>Movie list: {movies.length}</p>
    </div>
  );
  };

export default Nav;