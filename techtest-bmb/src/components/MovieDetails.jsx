import React from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();

  return (
    <div>
      <h1>
        Single movie detail page
        {' '}
        {movieId}
      </h1>
    </div>
  );
};
