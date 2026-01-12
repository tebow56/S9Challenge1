
const http = require('node:http');
const { default: template } = require('./data');
const PORT = 3000;
const server = http.createServer((req, res) => {
    res.end(template);
})

server.listen(3000, () => {
    console.log('Server is listening on http://localhost:3000');
});