const http = require('http');

const server = http.createServer((req, res) => {
    console.log('I am Lakshman');
});

server.listen(4000);