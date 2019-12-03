import axios, { AxiosResponse } from 'axios';
import { Request, Response } from 'express';


import { Album } from '../entities/Album';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000
});

export async function getAllAlbums(req: Request, res: Response) {
  try {
    const response: AxiosResponse = await instance.get('/albums');
    const albums: Album[] = response.data;

    console.log(`Retrieved ${albums.length} albums`);
    return res.status(200).send(albums);
  } catch (error) {
    console.log('Error:', error);
    throw new Error('Cannot retrieve albums from external API');
  }
}
