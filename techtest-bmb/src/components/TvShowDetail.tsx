/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppState } from '../redux/reducers';
import { TvShow } from '../common/TvShowsInterfaces';
import { getTvShowById } from '../redux/actions/actionCreators';

export const TvShowDetail = () => {
  const {tvShowId}:any = useParams();
  const dispatch = useDispatch();

  const tvShows = useSelector((store: AppState) => store.tvShows);
  const selectedTvShow:TvShow = useSelector((store: AppState) => store.selectedTvShow);

  useEffect(() => {
    dispatch(getTvShowById(+tvShowId, tvShows));
  }, []);

  return (
    <div>
      <h1>
        {selectedTvShow.name}
      </h1>
      <img src={`https://image.tmdb.org/t/p/original/${selectedTvShow.poster_path}`} alt="movie poster" height="50%" width="50%" />
    </div>
  );
};
