import react , {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: 'harry',
            price : $10,
            id : 49585
        },
        {
            name: 'Cendrila',
            price : $18,
            id : 49585
        }
    ]);

  return (
    <MovieContext.Provider value={[movies,setMovies]}>
        {props.children}
    </MovieContext.Provider>
  );
};

