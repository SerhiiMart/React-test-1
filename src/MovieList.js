import React, {useState} from 'react';

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
     <li>{movie.name}</li> 
    ))}
    </div>
  );
  };

export default MovieList;