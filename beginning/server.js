/**
 * Created by youngboo on 2016/3/27.
 */
const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

var server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello nodejs\n');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});