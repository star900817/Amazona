import React from 'react';
import Spiner from 'react-bootstrap/Spinner';

const LoadingBox = () => {
  return (
    <Spiner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spiner>
  );
};

export default LoadingBox;
