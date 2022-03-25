import React from 'react';
import { SpaceModel } from '../../models/space.model';

interface SpaceItemProps {
  spaceItem: SpaceModel;
}

const SpaceItem = (props: SpaceItemProps) => {
  return (
    <div className="bg-white h-full shadow-sm rounded-md overflow-hidden group w-full sm:w-1/2 lg:w-1/3 p-3 md:p-6">
      <div className="group-hover:opacity-75 transition duration-150 ease-in-out">
        <img src={props.spaceItem.url} alt={props.spaceItem.title} />
      </div>
      <div className="p-4 sm:p-5">
        <h1 className="sm:text-lg text-gray-900 font-semibold">{props.spaceItem.title}</h1>
        <p className="text-sm sm:text-base text-gray-700">{props.spaceItem.explanation}</p>
      </div>
    </div>
  );
};

export default SpaceItem;
