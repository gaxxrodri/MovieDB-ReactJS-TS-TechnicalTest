import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';
import { MovieDetails } from './components/MovieDetails';
import MoviesList from './components/MoviesList';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <main className="main-container">
        <nav>
          <Link to="/">MoviesList</Link>
          <Link to="/404">404</Link>
        </nav>

        <Switch>
          <Route path="/" exact component={MoviesList} />
          <Route path="/details/:movieId" component={MovieDetails} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
