/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Movie } from '../common/interfaces';
// import printImg from '../helpers/printImg';
// import printMovies from '../helpers/printMovies';
// import { Movie } from '../common/interfaces';
import { loadMovies } from '../redux/actions/actionCreators';
import { AppState } from '../redux/reducers';

const MoviesList = ():JSX.Element => {
  const [selectedMovie, setSelectedMovie] = useState<number>();
  const movies = useSelector((store: AppState) => store.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  const handleSelectedHero = (id:number) => {
    setSelectedMovie(id);
    // dispatch(selectedMovie())
  };

  //   function printMovies(array:Movie[]): JSX.Element[] { ///TODO
  //     return (array.map( ({id, title}:Movie) => {
  //        return (
  //             <button key={id} onClick={setSelectedMovie(id)}>
  //                  <li >
  //                    {title}
  //                  </li>
  //             </button>
  //        );
  //      })
  //    )
  //  };

  return (
    <div>
      <h1>MovieList</h1>
      <ul>
        {movies.map(({ id, title, poster_path }:Movie) => (
          <button key={id} type="button" onClick={() => { handleSelectedHero(id); }}>
            <Link to={`/details/${id}`}>
              <li>
                {title}
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="movie poster" height="10%" width="10%" />

              </li>
            </Link>
          </button>
        ))}

        {/* {printImg(movies)} */}
        {/* {printMovies(movies)} */}
        {/* {printMovies(movies, setSelectedMovie)} */}
      </ul>
    </div>
  );
};

// function mapStateToProps(store:any) {
//     return {
//       movies: store.movies,
//     };
//   };

export default MoviesList;
// export default connect(mapStateToProps)(MoviesList);
