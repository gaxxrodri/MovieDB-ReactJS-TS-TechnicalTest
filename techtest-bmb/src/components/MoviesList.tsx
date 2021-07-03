/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Movie } from '../common/interfaces/MovieInterfaces';
import { loadMovies } from '../redux/actions/actionCreators';
import { AppState } from '../redux/reducers';

const MoviesList:React.FC = ():JSX.Element => {
  const movies:Movie[] = useSelector((store: AppState) => store.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  return (
    <div>
      <h1>MovieList</h1>
      <ul>
        {movies.map(({ id, title, poster_path, vote_average }:Movie) => (
          <button key={id} type="button">
            <Link to={`/movie/details/${id}`}>
              <li>
                {title}
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="movie poster" height="10%" width="10%" />
                {vote_average}
              </li>
            </Link>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
