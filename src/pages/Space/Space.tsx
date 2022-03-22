import React from 'react';
import MainLayout from 'src/layouts/MainLayout';
import SpaceList from '../../components/SpaceList/SpaceList';

export default function Space() {
  return (
    <MainLayout>
      <h2 className="mb-4">Space</h2>
      <SpaceList />
    </MainLayout>
  );
}
