import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomeRoutes from './HomeRoutes';
import SpaceRoutes from './SpaceRoutes';

export default function Routes() {
  return (
    <BrowserRouter>
      <HomeRoutes />
      <SpaceRoutes />
    </BrowserRouter>
  );
}
