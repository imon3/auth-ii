const server = require('./api/server');

const port = process.envPORT || 5000;

server.listen(port, () => {
    console.log(`Running on port:${port}`)
})