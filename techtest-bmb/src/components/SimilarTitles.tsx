/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SimilarTitle } from '../common/interfaces/SimilarTitlesInterfaces';
import { loadSimilarTitles } from '../redux/actions/actionCreators';
import { AppState } from '../redux/reducers';


interface SimilarTitlesProps {
  titleId: number,
  mediaType: string,
  setCurrentId: React.Dispatch<React.SetStateAction<number | undefined>>
}


const SimilarTitles = ({titleId, mediaType, setCurrentId}:SimilarTitlesProps):JSX.Element => {         

  const titles:SimilarTitle[] = useSelector((store: AppState) => store.similarTitles);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadSimilarTitles(titleId, mediaType));
  }, [titleId]);
  
  const handleSimilarTitleDetail = (id:number) => {
    setCurrentId(id)
  };
  
  return (
    <div className='similar-titles-container'>
      <h1>SImilar title</h1>
      <ul>
        {titles.slice(0,5).map(({ id, title, poster_path }:SimilarTitle) => (
          <button key={id} type="button" onClick={()=> handleSimilarTitleDetail(id)}>
            <Link to={`/${mediaType}/details/${id}`}>
              <li>
                {title}
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="movie poster" height="10%" width="10%" />
              </li>
            </Link>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default SimilarTitles;
