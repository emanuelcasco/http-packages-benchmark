# 🌎 HTTP Clients benchmark


## Libraries

- [got](https://github.com/sindresorhus/got): Human-friendly and powerful HTTP request library for Node.js.

- [request-promise](https://github.com/request/request-promise): Simplified HTTP request client 'request' with Promise support. Powered by Bluebird..

- [node-fetch](https://github.com/bitinn/node-fetch): A light-weight module that brings window.fetch to Node.js.

- [axios](https://github.com/axios/axios): Promise based HTTP client for the browser and Node.js.

## Packages comparison

<table>
  <tr>
    <th>Libraries</th>
    <th>request-promise</th>
    <th>node-fetch</th>
    <th>axios</th>
    <th>got</th>
  </tr>
  <tr>
    <td>Downloads</td>
    <td>2.3M/month</td>
    <td>10.5M/month</td>
    <td>5.7M/month</td>
    <td>34.44M/month</td>
  </tr>
  <tr>
    <td>Minzipped size</td>
    <td>246.4KB *</td>
    <td>282B</td>
    <td>4.3KB</td>
    <td>18.4KB</td>
  </tr>
  <tr>
    <td>Created at</td>
    <td>Oct 4, 2013</td>
    <td>Jan 26, 2015</td>
    <td>Aug 18, 2014</td>
    <td>Mar 27, 2014</td>
  </tr>
</table>

_* **Note:** request-promise has [request](https://github.com/request/request) as peer dependency. So this is the summatory of both packages sizes: 179.8KB + 66.6KB_


## Features

<table>
  <tr>
    <th>Libraries</th>
    <th>request-promise</th>
    <th>node-fetch</th>
    <th>axios</th>
    <th>got</th>
  </tr>
  <tr>
    <td>HTTP/2 support</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Instances creation</td>
    <td>❌</td>
    <td>❌</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Promise API</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Stream API</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Request cancelation</td>
    <td>❌</td>
    <td>✅</td>
    <td>❌</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>RFC compliant caching</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Cookies (out-of-box)</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Follows redirects</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Retries on failure</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Handles gzip/deflate</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Advanced timeouts</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Timings</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Errors with metadata</td>
    <td>❌</td>
    <td>❌</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>JSON mode</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Composable</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Hooks</td>
    <td>❌</td>
    <td>❌</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
</table>

* _From [got repository](https://github.com/sindresorhus/got#comparison)._


