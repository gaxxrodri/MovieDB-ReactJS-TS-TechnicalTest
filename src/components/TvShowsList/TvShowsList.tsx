import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TvShow } from '../../common/interfaces/TvShowsInterfaces';
import { loadTvShows } from '../../redux/actions/actionCreators';
import { AppState } from '../../redux/reducers';
import './TvShowsList.css'

const TvShowsList:React.FC = ():JSX.Element => {
  const tvShows:TvShow[] = useSelector((store: AppState) => store.tvShows);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTvShows());
  }, [dispatch]);

  return (
    <section className="TvShowsList-container">
      <div className="TvShowsList-container__title">
        <h1>Trending TV shows</h1>
      </div>
      <ul className="list" >
        {tvShows.map(({ id, name, poster_path, vote_average}:TvShow) => (
          <li className="list-item" key={id}>
            <Link to={`/tv/details/${id}`}>
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="tv show poster" className="list-item__img" />
                <p className="list-item__title">{name}</p>
                <p className="list-item__rating">{vote_average} / 10 </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TvShowsList;
