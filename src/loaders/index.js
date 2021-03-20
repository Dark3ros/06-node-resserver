const ExpressServer = require ('./servers/expressServer');
const config = require('../config');

const startServer = async() => {

    const server =  new ExpressServer();
    console.log('Express Loaded');

    server.start();
    console.log('*********************************');
    console.log(` Server Listenig on port: ${config.port}`);
    console.log('*********************************');
}

module.exports = startServer;