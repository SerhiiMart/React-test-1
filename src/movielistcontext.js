import React, {useState, createContext} from 'react';

export const Movielistcontext = createContext();

export const MovieProvider = props => {
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
    <Movielistcontext.Provider value = {[movies, setMovies]}>
      {props.children}
    </Movielistcontext.Provider>
  );
};

