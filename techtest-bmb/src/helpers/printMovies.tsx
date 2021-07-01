import { Movie } from "../common/interfaces";

  export default function printMovies(array:Movie[]): JSX.Element[] { 
     return (  array.map( ({id, title}:Movie) => {
        return (
          <li key={id} > 
            {title}
          </li>
        );
      })
    )
  };