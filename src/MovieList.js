import React, {useState} from 'react';
import Movie from './Movie';

const MovieList = () => {
const [movies, setMovies] = useState([
  { name : "The Man from Earth",
    price : "$5",
    id : 45642 
  },
  { name : "Batman",
  price : "$30",
  id : 36748 
  },
  { name : "The Shawshank Redemption",
  price : "$10",
  id : 25481 
  }
]);
  return (
    <div>
    {movies.map(movie => (
     <Movie name={movie.name} price={movie.price}/>
    ))}
    </div>
  );
  };

export default MovieList;