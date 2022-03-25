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
      <img style={bgImage} src={dailyPhoto.hdurl} />
      {dailyPhoto.title?.length && (
        <div className="container flex items-center mx-auto h-full">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(dailyPhoto.title + '<br>')
                .pauseFor(1000)
                .changeDelay(20)
                .typeString(dailyPhoto.explanation || '')
                .start();
            }}
            options={{ wrapperClassName: 'text-xl font-bold text-white', delay: 50 }}
          />
        </div>
      )}
    </MainLayout>
  );
}
