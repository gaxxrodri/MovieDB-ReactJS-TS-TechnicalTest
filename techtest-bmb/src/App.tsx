import React from 'react';
import { Provider } from 'react-redux';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/NavBar';
import { MovieDetails } from './components/MovieDetails';
import MoviesList from './components/moviesList/MoviesList';
import NotFound from './components/NotFound';
import { TvShowDetail } from './components/TvShowDetail';
import TvShowsList from './components/TvShowsList';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store({})}>
        <BrowserRouter>
          <main className="main-container">
            <NavBar/>
            <Switch>
              <Route path="/" exact component={MoviesList} />
              <Route path="/movie/details/:movieId" exact component={MovieDetails} />
              <Route path="/tv" exact component={TvShowsList} />
              <Route path="/tv/details/:tvShowId" exact component={TvShowDetail} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
