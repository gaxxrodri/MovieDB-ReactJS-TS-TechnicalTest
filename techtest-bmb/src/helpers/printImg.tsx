import { Movie } from "../common/interfaces";
const URL_IMG_BASE:string = 'https://image.tmdb.org/t/p/original/'

export default function printImg(array:Movie[]): JSX.Element[] { 
     return ( array.map((movie:Movie) => {
        return (
          <li key={movie.id}>
           <img src={`${URL_IMG_BASE}${movie.poster_path}`} alt='movie poster' height='10%'width='10%'/>
           </li>
        );
      })
    )
  };