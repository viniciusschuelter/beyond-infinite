import React from 'react';
import { SpaceModel } from '../../models/space.model';

interface SpaceItemProps {
  spaceItem: SpaceModel;
}

const SpaceItem = (props: SpaceItemProps) => {
  return (
    <>
      <img src={props.spaceItem.url} />
      <h4>{props.spaceItem.title}</h4>
      <div>{props.spaceItem.explanation}</div>
    </>
  );
};

export default SpaceItem;
