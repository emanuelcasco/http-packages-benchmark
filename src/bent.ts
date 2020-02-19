import bent from 'bent';
import { Request, Response } from 'express';

import { Album } from '../entities/Album';

const bGet = bent('https://jsonplaceholder.typicode.com', 'json');

export async function getAllAlbums(req: Request, res: Response) {
  try {
    const albums = await bGet('/albums') as Album[];
    console.log(`Retrieved ${albums.length} albums`);
    return res.status(200).send(albums);
  } catch (error) {
    console.log('Error:', error);
    throw new Error('Cannot retrieve albums from external API');
  }
}
