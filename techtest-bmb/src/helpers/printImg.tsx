const URL_IMG_BASE:string = 'https://image.tmdb.org/t/p/original/'


export default function printImg(array:any):any {
    if(array[0] !== undefined) {
      return array[0].map((movie:any) => {
          return (
            <li key={movie.id}>
                <img src={URL_IMG_BASE+movie.poster_path} alt='movie poster' height='10%'width='10%'/>
            </li>
          );
      });
    };
  };