import React, { useEffect, useState } from 'react';
import { getSpaceListPhoto } from '../../apis/space.api';
import { SpaceModel } from '../../models/space.model';
import SpaceItem from '../SpaceItem/SpaceItem';

const initialSpaceList: SpaceModel[] = [];

const SpaceList = () => {
  const [spaceList, setSpaceList] = useState(initialSpaceList);

  useEffect(() => {
    getSpaceListPhoto().then((result: SpaceModel[]) => {
      setSpaceList(result);
    });
  }, []);

  const spaceListRendered = spaceList.map((spaceItem: SpaceModel) => (
    <SpaceItem spaceItem={spaceItem} key={spaceItem.title} />
  ));

  return <>{spaceListRendered}</>;
};

export default SpaceList;
