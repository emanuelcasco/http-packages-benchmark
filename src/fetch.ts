import fetch, { Response as FetchResponse } from 'node-fetch';
import { Request, Response } from 'express';

import { Album } from '../entities/Album';

const URL = 'https://jsonplaceholder.typicode.com/albums';
const options = {
  method: 'get',
  timeout: 10000
};

export async function getAllAlbums(req: Request, res: Response) {
  try {
    const albums: Album[] = await fetch(URL, options)
      .then((res: FetchResponse) => res.json());
    console.log(`Retrieved ${albums.length} albums`);
    return res.status(200).send(albums);
  } catch (error) {
    console.log('Error:', error);
    throw new Error('Cannot retrieve albums from external API');
  }
}
