export default function printMovies(array:any):any {
    if(array[0] !== undefined) {
      return array[0].map((movie:any) => {
          return (
            <li key={movie.id}>
              {movie.title}
            </li>
          );
      });
    };
  };