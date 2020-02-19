import express from 'express';
import bodyParser from 'body-parser';

import { getAllAlbums as axiosGetAll } from './src/axios';
import { getAllAlbums as fetchGetAll } from './src/fetch';
import { getAllAlbums as gotGetAll } from './src/got';
import { getAllAlbums as rpGetAll } from './src/rp';
import { getAllAlbums as bentGetAll } from './src/bent';
import { getAllAlbums as apisauceGetAll } from './src/apisauce';

const DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10;
const DEFAULT_PARAMETER_LIMIT = 10000;
const PORT = 8080;

const app = express();

// Client must send "Content-Type: application/json" header
app.use(bodyParser.json({
  limit: DEFAULT_BODY_SIZE_LIMIT
}));

app.use(bodyParser.urlencoded({
  extended: true,
  parameterLimit: DEFAULT_PARAMETER_LIMIT
}));

app.get('/axios', axiosGetAll);
app.get('/fetch', fetchGetAll);
app.get('/got', gotGetAll);
app.get('/rp', rpGetAll);
app.get('/bent', bentGetAll);
app.get('/apisauce', apisauceGetAll);

Promise.resolve()
  .then(() => {
    app.listen(PORT);
    console.log(`Listening on port: ${PORT}`);
  })
  .catch(console.error);