import rp from 'request-promise';
import { Request, Response } from 'express';

import { Album } from '../entities/Album';

const options = {
  uri: 'https://jsonplaceholder.typicode.com/albums',
  method: 'GET',
  timeout: 10000,
  json: true
};

export async function getAllAlbums(req: Request, res: Response) {
  try {
    const albums: Album[] = await rp(options);

    console.log(`Retrieved ${albums.length} albums`);
    return res.status(200).send(albums);
  } catch (error) {
    console.log('Error:', error);
    throw new Error('Cannot retrieve albums from external API');
  }
}
