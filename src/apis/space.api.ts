import { apiKey, baseApi, headers } from '../constants/api';
import { SpaceModel } from '../models/space.model';

export const getSpaceDailyPhoto = (): Promise<SpaceModel> => {
  return fetch(`${baseApi}planetary/apod?api_key=${apiKey}`, { method: 'get', ...headers })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};

export const getSpaceListPhoto = (): Promise<SpaceModel[]> => {
  return fetch(`${baseApi}planetary/apod?count=10&api_key=${apiKey}`, { method: 'get', ...headers })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};
