import got, { Response as GotResponse } from 'got';
import { Request, Response } from 'express';


import { Album } from '../entities/Album';

const instance = got.extend({
  prefixUrl: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  responseType: 'json'
});

export async function getAllAlbums(req: Request, res: Response) {
  try {
    const response: GotResponse = await instance.get('albums');
    const albums: Album[] = response.body as Album[];

    console.log(`Retrieved ${albums.length} albums`);
    return res.status(200).send(albums);
  } catch (error) {
    console.log('Error:', error);
    throw new Error('Cannot retrieve albums from external API');
  }
}
