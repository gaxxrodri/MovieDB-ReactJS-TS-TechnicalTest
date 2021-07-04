import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SimilarTitle } from '../../common/interfaces/SimilarTitlesInterfaces';
import { loadSimilarTitles } from '../../redux/actions/actionCreators';
import { AppState } from '../../redux/reducers';
import './SimilarTitles.css'


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
  }, [titleId, dispatch, mediaType]);
  
  const handleSimilarTitleDetail = (id:number) => {
    setCurrentId(id)
  };
  
  return (
    <div className='similar-titles-container'>
      <p>More like this</p>
      <ul className="list">
        {titles.slice(0,7).map(({ id, poster_path }:SimilarTitle) => (
        <li className="list-item" key={id}>
          <button type="button" onClick={()=> handleSimilarTitleDetail(id)}>
            <Link to={`/${mediaType}/details/${id}`}>
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="movie poster" className="list-item__img"/>
            </Link>
          </button>
         </li>
        ))}
      </ul>
    </div>
  );
};

export default SimilarTitles;
