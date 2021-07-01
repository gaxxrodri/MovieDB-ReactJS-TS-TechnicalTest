/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import printImg from '../helpers/printImg';
import printMovies from '../helpers/printMovies';
// import { Movie } from '../common/interfaces';
import { loadMovies } from '../redux/actions/actionCreators';
import { AppState } from '../redux/reducers';


const MoviesList = () => {
  const movies = useSelector((store: AppState) => store.movies)
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(loadMovies());
    }, []);
      
    return (
        <div>
            <h1>MovieList</h1>
            <ul>
              {printMovies(movies)}
              {printImg(movies)}
            </ul>
        </div>
    )
};


// function mapStateToProps(store:any) {
//     return {
//       movies: store.movies,
//     };
//   };
  
export default MoviesList;
// export default connect(mapStateToProps)(MoviesList);