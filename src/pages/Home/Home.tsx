import React, { useEffect, useState } from 'react';
import MainLayout from 'src/layouts/MainLayout';
import { getSpaceDailyPhoto } from '../../apis/space.api';
import { SpaceModel } from '../../models/space.model';
import Typewriter from 'typewriter-effect';

const initialDailyPhoto: SpaceModel = { title: '', url: '' };

const bgImage: any = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  zIndex: '-10'
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
      <img style={bgImage} src={dailyPhoto.url} />
      {dailyPhoto.title?.length && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(dailyPhoto.title + '<br>')
              .pauseFor(1000)
              .typeString(dailyPhoto.explanation || '')
              .start();
          }}
          options={{ wrapperClassName: 'text-xl font-bold text-white' }}
        />
      )}
    </MainLayout>
  );
}
