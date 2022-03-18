import React from 'react';
import MainLayout from 'src/layouts/MainLayout';
import SpaceItem from '../../components/SpaceItem/SpaceItem';

export default function Space() {
  return (
    <MainLayout>
      <h2 className="mb-4">Space</h2>
      <SpaceItem />
    </MainLayout>
  );
}
