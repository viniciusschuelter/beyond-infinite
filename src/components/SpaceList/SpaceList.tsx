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

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-3 lg:-mx-6">{spaceListRendered}</div>
    </div>
  );
};

export default SpaceList;
