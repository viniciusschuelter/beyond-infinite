import React from 'react';
import loadingImg from 'src/assets/images/loading.svg';

export default function Loading() {
  const overlayStyles = {
    display: 'flex',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    margin: 0
  };

  const imgStyles = {
    height: '40vh',
    margin: 'auto',
    borderRadius: '50%'
  };

  return (
    <div style={overlayStyles}>
      <img style={imgStyles} src={loadingImg} alt="loading"></img>
    </div>
  );
}
