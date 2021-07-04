import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppState } from '../../redux/reducers';
import { loadDetailsById } from '../../redux/actions/actionCreators';
import { Params } from '../../common/interfaces/MovieInterfaces';
import SimilarTitles from '../SimilarTitles/SimilarTitles';
import { TitleDetails } from '../../common/interfaces/TitleDetailsInterfaces';
import './MovieDetails.css';

export const MovieDetails:React.FC = () => {
  const { movieId }:Params = useParams();
  const [currentId, setCurrentId] = useState<number>();
  const dispatch = useDispatch();

  const titleDetails:TitleDetails = useSelector((store: AppState) => store.titleDetails);

  useEffect(() => {
    dispatch(loadDetailsById(+movieId, 'movie'));
  }, [currentId, movieId, dispatch]);

  return (
    <section className="details-container">
      <div className="item">
        <img src={`https://image.tmdb.org/t/p/original/${titleDetails.poster_path}`} alt="movie poster" className="item__img" />
        <div className="info-container">
          <p className="info-container__title">
            {titleDetails.title}
          </p>
          <p className="info-container__overview">
            {titleDetails.overview}
          </p>
          <div className="info-container__extra-info">
            <p>
              Ranking:
              {titleDetails.vote_average}
              / 10
            </p>
            <p>
              Duration:
              {titleDetails.runtime}
              min
            </p>
            <p>
              Release date:
              {titleDetails.release_date}
            </p>
          </div>
        </div>
      </div>
      <div className="similar-titles-container">
        <SimilarTitles titleId={+movieId} mediaType="movie" setCurrentId={setCurrentId} />
      </div>
    </section>
  );
};
