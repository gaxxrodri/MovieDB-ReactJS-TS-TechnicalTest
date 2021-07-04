import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppState } from '../../redux/reducers';
import { loadDetailsById } from '../../redux/actions/actionCreators';
import SimilarTitles from '../SimilarTitles/SimilarTitles';
import { TitleDetails } from '../../common/interfaces/TitleDetailsInterfaces';
import { Params } from '../../common/interfaces/TvShowsInterfaces';

export const TvShowDetail:React.FC = () => {
  const { tvShowId }:Params = useParams();
  const [currentId, setCurrentId] = useState<number>();
  const dispatch = useDispatch();

  const titleDetails:TitleDetails = useSelector((store: AppState) => store.titleDetails);

  useEffect(() => {
    dispatch(loadDetailsById(+tvShowId, 'tv'));
  }, [currentId, tvShowId, dispatch]);

  return (
    <section className="details-container">
      <div className="item">
        <img src={`https://image.tmdb.org/t/p/original/${titleDetails.poster_path}`} alt="tv show poster" className="item__img" />
        <div className="info-container">
          <p className="info-container__title">
            {titleDetails.name}
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
              Seasons:
              {titleDetails.number_of_seasons}
            </p>
            <p>
              Next episode release:
              {titleDetails.next_episode_to_air?.air_date}
            </p>
          </div>
        </div>
      </div>
      <div className="similar-titles-container">
        <SimilarTitles titleId={+tvShowId} mediaType="tv" setCurrentId={setCurrentId} />
      </div>
    </section>
  );
};
