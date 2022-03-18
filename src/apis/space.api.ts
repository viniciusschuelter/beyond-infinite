import { apiKey, baseApi, headers } from '../constants/api';
import { SpaceModel } from '../models/space.model';

export const getDailySpacePhoto = (): Promise<SpaceModel> => {
  return fetch(`${baseApi}planetary/apod?api_key=${apiKey}`, { method: 'get', ...headers })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};
