import React, { useEffect, useState } from 'react';
import MainLayout from 'src/layouts/MainLayout';
import { getSpaceDailyPhoto } from '../../apis/space.api';
import { SpaceModel } from '../../models/space.model';

const initialDailyPhoto: SpaceModel = {
  title: '',
  url: ''
};

export default function Home() {
  const [dailyPhoto, setDailyPhoto] = useState(initialDailyPhoto);

  useEffect(() => {
    getSpaceDailyPhoto().then((result: SpaceModel) => {
      setDailyPhoto(result);
    });
  }, []);

  return (
    <MainLayout>
      <h2 className="mb-4">Home</h2>
      <img src={dailyPhoto.url} />
    </MainLayout>
  );
}
