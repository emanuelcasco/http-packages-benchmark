import apisauce from 'apisauce';
import { Request, Response } from 'express';

import { Album } from '../entities/Album';

const instance = apisauce.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000
});

export async function getAllAlbums(req: Request, res: Response) {
  const response = await instance.get<Album[]>('/albums');
  if (response.ok && response.data) {
    const albums = response.data;
    console.log(`Retrieved ${albums.length} albums`);
    return res.status(200).send(albums);
  } else {
    console.log('Error:', response.problem);
    throw new Error('Cannot retrieve albums from external API');
  }
}
