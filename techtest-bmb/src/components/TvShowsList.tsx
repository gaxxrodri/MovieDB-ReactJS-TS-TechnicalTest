/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TvShow } from '../common/TvShowsInterfaces';
import { loadTvShows } from '../redux/actions/actionCreators';
import { AppState } from '../redux/reducers';

const TvShowsList = ():JSX.Element => {
  const tvShows:TvShow[] = useSelector((store: AppState) => store.tvShows);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTvShows());
  }, []);

  return (
    <div>
      <h1>TvShows List</h1>
      <ul>
        {tvShows.map(({ id, name, poster_path }:TvShow) => (
          <button key={id} type="button">
            <Link to={`/details/${id}`}>
              <li>
                {name}
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="tv show poster" height="10%" width="10%" />
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

export default TvShowsList;
