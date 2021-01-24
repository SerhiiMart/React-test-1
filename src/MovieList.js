import React, {useContext} from 'react';
import Movie from './Movie';
import { Movielistcontext } from './movielistcontext';


const MovieList = () => {
  const [movies, setMovies] = useContext(Movielistcontext);
  return (
    <div>
    {movies.map(movie => (
     <Movie name={movie.name} price={movie.price} key={movie.id}/>
    ))}
    </div>
  );
  };

export default MovieList;