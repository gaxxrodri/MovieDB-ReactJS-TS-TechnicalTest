import React from 'react';
import { Provider } from 'react-redux';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { MovieDetails } from './components/MovieDetails/MovieDetails';
import MoviesList from './components/MoviesList/MoviesList';
import NotFound from './components/NotFound/NotFound';
import { TvShowDetail } from './components/TvShowDetails/TvShowDetail';
import TvShowsList from './components/TvShowsList/TvShowsList';
import store from './redux/store';

function App() {
  
  return (
    <div className="App">
      <Provider store={store({})}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/" exact component={MoviesList} />
            <Route path="/movie/details/:movieId" exact component={MovieDetails} />
            <Route path="/tv" exact component={TvShowsList} />
            <Route path="/tv/details/:tvShowId" exact component={TvShowDetail} />
            <Route path="" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
