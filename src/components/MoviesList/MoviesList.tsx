import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Movie } from '../../common/interfaces/MovieInterfaces';
import { loadMovies } from '../../redux/actions/actionCreators';
import { AppState } from '../../redux/reducers';
import './MoviesList.css';

const MoviesList:React.FC = ():JSX.Element => {
  const movies:Movie[] = useSelector((store: AppState) => store.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  return (
    <section className="movieList-container">
      <div className="movieList-container__title">
        <h1>Trending movies</h1>
      </div>
      <ul className="list">
        {movies.map(({
          id, title, poster_path, vote_average,
        }:Movie) => (
          <li className="list-item" key={id}>
            <Link to={`/movie/details/${id}`}>
              <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} className="list-item__img" alt="movie poster" />
              <p className="list-item__title">{title}</p>
              <p className="list-item__rating">
                {vote_average}
                / 10
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MoviesList;
