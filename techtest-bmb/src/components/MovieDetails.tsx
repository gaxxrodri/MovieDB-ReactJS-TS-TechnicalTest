/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppState } from '../redux/reducers';
import { loadDetailsById } from '../redux/actions/actionCreators';
import { Movie } from '../common/interfaces/MovieInterfaces';
import SimilarTitles from './SimilarTitles';
import { TitleDetails } from '../common/interfaces/TitleDetailsInterfaces';

export const MovieDetails:React.FC = () => {

  const {movieId}:any = useParams();    //TODO
  const [currentId, setCurrentId] = useState<number>();
  const dispatch = useDispatch();


  const titleDetails:TitleDetails = useSelector((store: AppState) => store.titleDetails);

  useEffect(() => {
    dispatch(loadDetailsById(+movieId, 'movie'));
  }, [currentId]);

  return (
    <div>
      <h1>
        {titleDetails.name}
      </h1>
      <img src={`https://image.tmdb.org/t/p/original/${titleDetails.poster_path}`} alt="movie poster" style={{height:'10%', width:'10%'}} />
      <div>
        <SimilarTitles titleId={+movieId} mediaType='movie' setCurrentId={setCurrentId} />  
      </div>
    </div>
  );
};
