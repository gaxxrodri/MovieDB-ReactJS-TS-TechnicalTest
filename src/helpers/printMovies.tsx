import { Movie } from '../common/interfaces/MovieInterfaces';

export default function printMovies(array:Movie[], setSelectedMovie:any): JSX.Element[] { /// TODO
  return (array.map(({ id, title }:Movie) => (
    <button key={id} onClick={setSelectedMovie(id)}>
      <li>
        {title}
      </li>
    </button>
  ))
  );
}
