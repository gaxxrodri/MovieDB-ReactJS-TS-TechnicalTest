import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Movie } from '../common/types';
import { loadMovies } from '../redux/actions/actionCreators';


const MoviesList = (movies:Movie[]) => {
  const dispatch = useDispatch();

    
  useEffect(() => {
      dispatch(loadMovies());
   }, []);


// function printStats(array:any) {
//   return array.map(([element, value]:any) => (
//      <li key={`${value}`}>
//         {element}
//       </li>
//     ));
// }

    return (
        <div>
            <h1>MovieList</h1>
            <ul>
              {/* {printStats(movies)} */}
            </ul>
        </div>
    )
};

function mapStateToProps(store:any) {
    return {
      movies: store.movies,
    };
  };
  
export default connect(mapStateToProps)(MoviesList);