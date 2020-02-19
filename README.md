# 🌎 HTTP Clients benchmark


## Libraries

- [got](https://github.com/sindresorhus/got): Human-friendly and powerful HTTP request library for Node.js.

- [request-promise](https://github.com/request/request-promise): Simplified HTTP request client 'request' with Promise support. Powered by Bluebird. _DEPRECATED_.

- [node-fetch](https://github.com/bitinn/node-fetch): A light-weight module that brings window.fetch to Node.js.

- [axios](https://github.com/axios/axios): Promise based HTTP client for the browser and Node.js.

- [bent](https://github.com/mikeal/bent): Functional HTTP client for Node.js and Browsers w/ async/await.

- [apisauce](https://github.com/infinitered/apisauce): Axios + standardized errors + request/response transforms.

## Packages comparison

<table>
  <tr>
    <th></th>
    <th>request-promise</th>
    <th>node-fetch</th>
    <th>axios</th>
    <th>got</th>
    <th>bent</th>
    <th>apisauce</th>
  </tr>
  <tr>
    <td>Downloads</td>
    <td>2M/month</td>
    <td>11M/month</td>
    <td>6M/month</td>
    <td>34M/month</td>
    <td>5K/month</td>
    <td>54K/month</td>
  </tr>
  <tr>
    <td>Dependencies</td>
    <td><a href="https://npm.anvaka.com/#/view/2d/request-promise">7</a></td>
    <td><a href="https://npm.anvaka.com/#/view/2d/node-fetch">0</a></td>
    <td><a href="https://npm.anvaka.com/#/view/2d/axios">3</a></td>
    <td><a href="https://npm.anvaka.com/#/view/2d/got">15</a></td>
    <td><a href="https://npm.anvaka.com/#/view/2d/bent">3</a></td>
    <td><a href="https://npm.anvaka.com/#/view/2d/apisauce">2</a></td>
  </tr>r
  <tr>
    <td>Minzipped size</td>
    <td>246.4KB *</td>
    <td>282B</td>
    <td>4.3KB</td>
    <td>18.4KB</td>
    <td>805B</td>
    <td>9.5KB</td>
  </tr>
  <tr>
    <td>Created at</td>
    <td>Oct 4, 2013</td>
    <td>Jan 26, 2015</td>
    <td>Aug 18, 2014</td>
    <td>Mar 27, 2014</td>
    <td>Abr 6, 2016</td>
  </tr>
</table>

_* **Note:** request-promise has [request](https://github.com/request/request) as peer dependency. So this is the summatory of both packages sizes: 179.8KB + 66.6KB_


## Features

<table>
  <tr>
    <th></th>
    <th>request-promise</th>
    <th>node-fetch</th>
    <th>axios</th>
    <th>got</th>
    <th>bent</th>
    <th>apisauce</th>
  </tr>
  <tr>
    <td>HTTP/2 support</td>
    <td>❌</td>
    <td>❌</td>
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
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Promise API</td>
    <td>✅</td>
    <td>✅</td>
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
    <td>✅</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>Request cancelation</td>
    <td>❌</td>
    <td>✅</td>
    <td>❌</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>RFC compliant caching</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Cookies (out-of-box)</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Follows redirects</td>
    <td>✅</td>
    <td>✅</td>
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
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Handles gzip/deflate</td>
    <td>✅</td>
    <td>✅</td>
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
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>JSON mode</td>
    <td>✅</td>
    <td>✅</td>
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
    <td>✅</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Hooks</td>
    <td>❌</td>
    <td>❌</td>
    <td>✅</td>
    <td>✅</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
</table>

* _Based on table from [got repository](https://github.com/sindresorhus/got#comparison)._


## Performance 

<table class="table table-bordered table-hover table-condensed">
<thead><tr><th title="Field #1">Package</th>
<th title="Field #2">requests/average</th>
<th title="Field #3">requests/mean</th>
<th title="Field #4">requests/stddev</th>
<th title="Field #5">requests/min</th>
<th title="Field #6">requests/max</th>
<th title="Field #7">requests/total</th>
<th title="Field #8">requests/p0_001</th>
<th title="Field #9">requests/p0_01</th>
<th title="Field #10">requests/p0_1</th>
<th title="Field #11">requests/p1</th>
<th title="Field #12">requests/p2_5</th>
<th title="Field #13">requests/p10</th>
<th title="Field #14">requests/p25</th>
<th title="Field #15">requests/p50</th>
<th title="Field #16">requests/p75</th>
<th title="Field #17">requests/p90</th>
<th title="Field #18">requests/p97_5</th>
<th title="Field #19">requests/p99</th>
<th title="Field #20">requests/p99_9</th>
<th title="Field #21">requests/p99_99</th>
<th title="Field #22">requests/p99_999</th>
<th title="Field #23">requests/sent</th>
<th title="Field #24">latency/average</th>
<th title="Field #25">latency/mean</th>
<th title="Field #26">latency/stddev</th>
<th title="Field #27">latency/min</th>
<th title="Field #28">latency/max</th>
<th title="Field #29">latency/p0_001</th>
<th title="Field #30">latency/p0_01</th>
<th title="Field #31">latency/p0_1</th>
<th title="Field #32">latency/p1</th>
<th title="Field #33">latency/p2_5</th>
<th title="Field #34">latency/p10</th>
<th title="Field #35">latency/p25</th>
<th title="Field #36">latency/p50</th>
<th title="Field #37">latency/p75</th>
<th title="Field #38">latency/p90</th>
<th title="Field #39">latency/p97_5</th>
<th title="Field #40">latency/p99</th>
<th title="Field #41">latency/p99_9</th>
<th title="Field #42">latency/p99_99</th>
<th title="Field #43">latency/p99_999</th>
<th title="Field #44">throughput/average</th>
<th title="Field #45">throughput/mean</th>
<th title="Field #46">throughput/stddev</th>
<th title="Field #47">throughput/min</th>
<th title="Field #48">throughput/max</th>
<th title="Field #49">throughput/total</th>
<th title="Field #50">throughput/p0_001</th>
<th title="Field #51">throughput/p0_01</th>
<th title="Field #52">throughput/p0_1</th>
<th title="Field #53">throughput/p1</th>
<th title="Field #54">throughput/p2_5</th>
<th title="Field #55">throughput/p10</th>
<th title="Field #56">throughput/p25</th>
<th title="Field #57">throughput/p50</th>
<th title="Field #58">throughput/p75</th>
<th title="Field #59">throughput/p90</th>
<th title="Field #60">throughput/p97_5</th>
<th title="Field #61">throughput/p99</th>
<th title="Field #62">throughput/p99_9</th>
<th title="Field #63">throughput/p99_99</th>
<th title="Field #64">throughput/p99_999</th>
<th title="Field #65">errors</th>
<th title="Field #66">timeouts</th>
<th title="Field #67">duration</th>
<th title="Field #68">start</th>
<th title="Field #69">finish</th>
<th title="Field #70">connections</th>
<th title="Field #71">pipelining</th>
<th title="Field #72">non2xx</th>
<th title="Field #73">1xx</th>
<th title="Field #74">2xx</th>
<th title="Field #75">3xx</th>
<th title="Field #76">4xx</th>
<th title="Field #77">5xx</th>
</tr></thead>
<tbody><tr>
<td>BENT</td>
<td align="right">356.26</td>
<td align="right">356.26</td>
<td align="right">116.64</td>
<td align="right">150.45</td>
<td align="right">531.73</td>
<td align="right">7125.09</td>
<td align="right">150.45</td>
<td align="right">150.45</td>
<td align="right">150.45</td>
<td align="right">150.45</td>
<td align="right">150.45</td>
<td align="right">177.18</td>
<td align="right">264.09</td>
<td align="right">362.73</td>
<td align="right">444.91</td>
<td align="right">495.09</td>
<td align="right">531.73</td>
<td align="right">531.73</td>
<td align="right">531.73</td>
<td align="right">531.73</td>
<td align="right">531.73</td>
<td align="right">7226.00</td>
<td align="right">291.89</td>
<td align="right">291.89</td>
<td align="right">502.78</td>
<td align="right">21.45</td>
<td align="right">5386.92</td>
<td align="right">21.45</td>
<td align="right">21.73</td>
<td align="right">24.55</td>
<td align="right">29.09</td>
<td align="right">32.00</td>
<td align="right">38.91</td>
<td align="right">47.64</td>
<td align="right">64.45</td>
<td align="right">319.36</td>
<td align="right">965.91</td>
<td align="right">1385.09</td>
<td align="right">2118.00</td>
<td align="right">3720.00</td>
<td align="right">5386.45</td>
<td align="right">5386.45</td>
<td align="right">2546458.76</td>
<td align="right">2546458.76</td>
<td align="right">833677.25</td>
<td align="right">1075449.09</td>
<td align="right">3800786.55</td>
<td align="right">50930149.82</td>
<td align="right">1075804.09</td>
<td align="right">1075804.09</td>
<td align="right">1075804.09</td>
<td align="right">1075804.09</td>
<td align="right">1075804.09</td>
<td align="right">1266919.73</td>
<td align="right">1888487.73</td>
<td align="right">2593791.00</td>
<td align="right">3181287.73</td>
<td align="right">3539873.91</td>
<td align="right">3801831.73</td>
<td align="right">3801831.73</td>
<td align="right">3801831.73</td>
<td align="right">3801831.73</td>
<td align="right">3801831.73</td>
<td align="right">0.91</td>
<td align="right">0.91</td>
<td align="right">20.06</td>
<td>#DIV/0!</td>
<td>#DIV/0!</td>
<td align="right">100.00</td>
<td align="right">1.00</td>
<td align="right">0.00</td>
<td align="right">0.00</td>
<td align="right">7125.09</td>
<td align="right">0.00</td>
<td align="right">0.00</td>
<td align="right">0.00</td>
</tr>
<tr>
<td>AXIOS</td>
<td align="right">245.76</td>
<td align="right">245.76</td>
<td align="right">41.32</td>
<td align="right">162.18</td>
<td align="right">318.18</td>
<td align="right">4915.27</td>
<td align="right">162.18</td>
<td align="right">162.18</td>
<td align="right">162.18</td>
<td align="right">162.18</td>
<td align="right">162.18</td>
<td align="right">182.73</td>
<td align="right">216.55</td>
<td align="right">248.82</td>
<td align="right">270.73</td>
<td align="right">285.27</td>
<td align="right">318.18</td>
<td align="right">318.18</td>
<td align="right">318.18</td>
<td align="right">318.18</td>
<td align="right">318.18</td>
<td align="right">5018.27</td>
<td align="right">401.57</td>
<td align="right">401.57</td>
<td align="right">655.67</td>
<td align="right">23.09</td>
<td align="right">7887.79</td>
<td align="right">23.09</td>
<td align="right">23.09</td>
<td align="right">28.09</td>
<td align="right">35.73</td>
<td align="right">40.18</td>
<td align="right">52.27</td>
<td align="right">66.45</td>
<td align="right">116.00</td>
<td align="right">437.18</td>
<td align="right">1254.45</td>
<td align="right">2119.91</td>
<td align="right">3020.73</td>
<td align="right">5599.27</td>
<td align="right">7887.45</td>
<td align="right">7887.45</td>
<td align="right">1756666.76</td>
<td align="right">1756666.76</td>
<td align="right">295311.94</td>
<td align="right">1159275.64</td>
<td align="right">2274363.64</td>
<td align="right">35134369.45</td>
<td align="right">1159585.91</td>
<td align="right">1159585.91</td>
<td align="right">1159585.91</td>
<td align="right">1159585.91</td>
<td align="right">1159585.91</td>
<td align="right">1306297.18</td>
<td align="right">1548333.55</td>
<td align="right">1778966.27</td>
<td align="right">1935731.36</td>
<td align="right">2039900.09</td>
<td align="right">2275420.09</td>
<td align="right">2275420.09</td>
<td align="right">2275420.09</td>
<td align="right">2275420.09</td>
<td align="right">2275420.09</td>
<td align="right">2.18</td>
<td align="right">2.18</td>
<td align="right">20.06</td>
<td>#DIV/0!</td>
<td>#DIV/0!</td>
<td align="right">100.00</td>
<td align="right">1.00</td>
<td align="right">0.00</td>
<td align="right">0.00</td>
<td align="right">4915.27</td>
<td align="right">0.00</td>
<td align="right">0.00</td>
<td align="right">0.00</td>
</tr>
<tr>
<td>FETCH</td>
<td align="right">333.62</td>
<td align="right">333.62</td>
<td align="right">110.98</td>
<td align="right">134.27</td>
<td align="right">524.18</td>
<td align="right">6672.45</td>
<td align="right">134.27</td>
<td align="right">134.27</td>
<td align="right">134.27</td>
<td align="right">134.27</td>
<td align="right">134.27</td>
<td align="right">184.55</td>
<td align="right">242.27</td>
<td align="right">325.55</td>
<td align="right">411.73</td>
<td align="right">472.82</td>
<td align="right">524.18</td>
<td align="right">524.18</td>
<td align="right">524.18</td>
<td align="right">524.18</td>
<td align="right">524.18</td>
<td align="right">6773.36</td>
<td align="right">305.73</td>
<td align="right">305.73</td>
<td align="right">558.96</td>
<td align="right">21.45</td>
<td align="right">6512.33</td>
<td align="right">21.45</td>
<td align="right">21.45</td>
<td align="right">24.91</td>
<td align="right">29.73</td>
<td align="right">32.82</td>
<td align="right">40.64</td>
<td align="right">50.45</td>
<td align="right">66.82</td>
<td align="right">299.27</td>
<td align="right">1113.18</td>
<td align="right">1538.45</td>
<td align="right">2383.27</td>
<td align="right">4458.82</td>
<td align="right">6511.64</td>
<td align="right">6511.64</td>
<td align="right">2384680.15</td>
<td align="right">2384680.15</td>
<td align="right">793241.91</td>
<td align="right">959781.45</td>
<td align="right">3746851.64</td>
<td align="right">47694705.09</td>
<td align="right">960185.18</td>
<td align="right">960185.18</td>
<td align="right">960185.18</td>
<td align="right">960185.18</td>
<td align="right">960185.18</td>
<td align="right">1319423.00</td>
<td align="right">1732327.73</td>
<td align="right">2327737.18</td>
<td align="right">2943719.73</td>
<td align="right">3380316.09</td>
<td align="right">3748211.36</td>
<td align="right">3748211.36</td>
<td align="right">3748211.36</td>
<td align="right">3748211.36</td>
<td align="right">3748211.36</td>
<td align="right">0.91</td>
<td align="right">0.91</td>
<td align="right">20.06</td>
<td>#DIV/0!</td>
<td>#DIV/0!</td>
<td align="right">100.00</td>
<td align="right">1.00</td>
<td align="right">0.00</td>
<td align="right">0.00</td>
<td align="right">6672.45</td>
<td align="right">0.00</td>
<td align="right">0.00</td>
<td align="right">0.00</td>
</tr>
<tr>
<td>GOT</td>
<td align="right">328.77</td>
<td align="right">328.77</td>
<td align="right">88.91</td>
<td align="right">156.09</td>
<td align="right">475.73</td>
<td align="right">6575.36</td>
<td align="right">156.09</td>
<td align="right">156.09</td>
<td align="right">156.09</td>
<td align="right">156.09</td>
<td align="right">156.09</td>
<td align="right">192.45</td>
<td align="right">262.36</td>
<td align="right">324.55</td>
<td align="right">393.36</td>
<td align="right">425.55</td>
<td align="right">475.73</td>
<td align="right">475.73</td>
<td align="right">475.73</td>
<td align="right">475.73</td>
<td align="right">475.73</td>
<td align="right">6676.00</td>
<td align="right">314.17</td>
<td align="right">314.17</td>
<td align="right">525.39</td>
<td align="right">28.45</td>
<td align="right">6127.15</td>
<td align="right">28.45</td>
<td align="right">28.45</td>
<td align="right">32.55</td>
<td align="right">38.36</td>
<td align="right">42.64</td>
<td align="right">54.18</td>
<td align="right">71.73</td>
<td align="right">100.64</td>
<td align="right">301.36</td>
<td align="right">967.09</td>
<td align="right">1591.64</td>
<td align="right">2412.09</td>
<td align="right">4354.82</td>
<td align="right">6126.73</td>
<td align="right">6126.73</td>
<td align="right">2350034.62</td>
<td align="right">2350034.62</td>
<td align="right">635496.20</td>
<td align="right">1115737.82</td>
<td align="right">3400498.55</td>
<td align="right">47000699.27</td>
<td align="right">1116089.18</td>
<td align="right">1116089.18</td>
<td align="right">1116089.18</td>
<td align="right">1116089.18</td>
<td align="right">1116089.18</td>
<td align="right">1376255.00</td>
<td align="right">1875920.45</td>
<td align="right">2320383.00</td>
<td align="right">2813020.09</td>
<td align="right">3042954.64</td>
<td align="right">3401354.64</td>
<td align="right">3401354.64</td>
<td align="right">3401354.64</td>
<td align="right">3401354.64</td>
<td align="right">3401354.64</td>
<td align="right">0.64</td>
<td align="right">0.64</td>
<td align="right">20.07</td>
<td>#DIV/0!</td>
<td>#DIV/0!</td>
<td align="right">100.00</td>
<td align="right">1.00</td>
<td align="right">0.00</td>
<td align="right">0.00</td>
<td align="right">6575.36</td>
<td align="right">0.00</td>
<td align="right">0.00</td>
<td align="right">0.00</td>
</tr>
<tr>
<td>RP</td>
<td align="right">266.63</td>
<td align="right">266.63</td>
<td align="right">28.96</td>
<td align="right">197.27</td>
<td align="right">319.27</td>
<td align="right">5332.64</td>
<td align="right">197.27</td>
<td align="right">197.27</td>
<td align="right">197.27</td>
<td align="right">197.27</td>
<td align="right">197.27</td>
<td align="right">221.27</td>
<td align="right">252.18</td>
<td align="right">269.55</td>
<td align="right">282.45</td>
<td align="right">294.73</td>
<td align="right">319.27</td>
<td align="right">319.27</td>
<td align="right">319.27</td>
<td align="right">319.27</td>
<td align="right">319.27</td>
<td align="right">5434.91</td>
<td align="right">355.15</td>
<td align="right">355.15</td>
<td align="right">616.99</td>
<td align="right">26.45</td>
<td align="right">7946.91</td>
<td align="right">26.45</td>
<td align="right">26.45</td>
<td align="right">29.64</td>
<td align="right">38.18</td>
<td align="right">43.27</td>
<td align="right">54.82</td>
<td align="right">67.09</td>
<td align="right">95.36</td>
<td align="right">326.82</td>
<td align="right">1176.27</td>
<td align="right">1910.09</td>
<td align="right">2943.09</td>
<td align="right">5421.45</td>
<td align="right">7946.45</td>
<td align="right">7946.45</td>
<td align="right">1905893.82</td>
<td align="right">1905893.82</td>
<td align="right">207092.22</td>
<td align="right">1410105.45</td>
<td align="right">2282161.45</td>
<td align="right">38117684.73</td>
<td align="right">1410442.64</td>
<td align="right">1410442.64</td>
<td align="right">1410442.64</td>
<td align="right">1410442.64</td>
<td align="right">1410442.64</td>
<td align="right">1582079.00</td>
<td align="right">1802890.64</td>
<td align="right">1927167.00</td>
<td align="right">2019606.27</td>
<td align="right">2107763.36</td>
<td align="right">2283519.00</td>
<td align="right">2283519.00</td>
<td align="right">2283519.00</td>
<td align="right">2283519.00</td>
<td align="right">2283519.00</td>
<td align="right">2.27</td>
<td align="right">2.27</td>
<td align="right">20.06</td>
<td>#DIV/0!</td>
<td>#DIV/0!</td>
<td align="right">100.00</td>
<td align="right">1.00</td>
<td align="right">0.00</td>
<td align="right">0.00</td>
<td align="right">5332.64</td>
<td align="right">0.00</td>
<td align="right">0.00</td>
<td align="right">0.00</td>
</tr>
<tr>
<td>APISAUCE</td>
<td align="right">253.05</td>
<td align="right">253.05</td>
<td align="right">41.06</td>
<td align="right">167.55</td>
<td align="right">321.55</td>
<td align="right">5061.09</td>
<td align="right">167.55</td>
<td align="right">167.55</td>
<td align="right">167.55</td>
<td align="right">167.55</td>
<td align="right">167.55</td>
<td align="right">183.09</td>
<td align="right">224.00</td>
<td align="right">258.64</td>
<td align="right">275.36</td>
<td align="right">296.73</td>
<td align="right">321.55</td>
<td align="right">321.55</td>
<td align="right">321.55</td>
<td align="right">321.55</td>
<td align="right">321.55</td>
<td align="right">5163.64</td>
<td align="right">371.74</td>
<td align="right">371.74</td>
<td align="right">651.87</td>
<td align="right">24.64</td>
<td align="right">7714.74</td>
<td align="right">24.64</td>
<td align="right">24.64</td>
<td align="right">28.73</td>
<td align="right">35.82</td>
<td align="right">40.27</td>
<td align="right">51.27</td>
<td align="right">65.09</td>
<td align="right">91.00</td>
<td align="right">319.27</td>
<td align="right">1230.18</td>
<td align="right">2105.82</td>
<td align="right">3081.36</td>
<td align="right">5425.45</td>
<td align="right">7714.18</td>
<td align="right">7714.18</td>
<td align="right">1808838.69</td>
<td align="right">1808838.69</td>
<td align="right">293469.06</td>
<td align="right">1197614.91</td>
<td align="right">2298406.91</td>
<td align="right">36176677.82</td>
<td align="right">1197927.73</td>
<td align="right">1197927.73</td>
<td align="right">1197927.73</td>
<td align="right">1197927.73</td>
<td align="right">1197927.73</td>
<td align="right">1309020.09</td>
<td align="right">1601721.18</td>
<td align="right">1849063.73</td>
<td align="right">1968871.73</td>
<td align="right">2121913.18</td>
<td align="right">2299530.64</td>
<td align="right">2299530.64</td>
<td align="right">2299530.64</td>
<td align="right">2299530.64</td>
<td align="right">2299530.64</td>
<td align="right">2.55</td>
<td align="right">2.55</td>
<td align="right">20.06</td>
<td>#DIV/0!</td>
<td>#DIV/0!</td>
<td align="right">100.00</td>
<td align="right">1.00</td>
<td align="right">0.00</td>
<td align="right">0.00</td>
<td align="right">5061.09</td>
<td align="right">0.00</td>
<td align="right">0.00</td>
<td align="right">0.00</td>
</tr>
</tbody></table>
