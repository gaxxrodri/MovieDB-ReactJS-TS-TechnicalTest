/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Movie } from '../common/interfaces';
import { getMovieById } from '../redux/actions/actionCreators';
import { AppState } from '../redux/reducers';

export const MovieDetails = () => {
  const { movieId }:any = useParams();
  const dispatch = useDispatch();

  const movies = useSelector((store: AppState) => store.movies);
  const selectedMovie:Movie = useSelector((store: AppState) => store.selectedMovie);

  useEffect(() => {
    dispatch(getMovieById(+movieId, movies));
  }, []);

  return (
    <div>
      <h1>
        {selectedMovie.title}
      </h1>
      <img src={`https://image.tmdb.org/t/p/original/${selectedMovie.poster_path}`} alt="movie poster" height="50%" width="50%" />
    </div>
  );
};
