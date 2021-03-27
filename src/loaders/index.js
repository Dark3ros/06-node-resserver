const ExpressServer = require ('./servers/expressServer');
const config = require('../config');
const logger = require('./logger');

const startServer = async() => {

    const server =  new ExpressServer();
    logger.info('Express Loaded');

    server.start();
    logger.info(`##############################
      Server Listenig on port: ${config.port}
      ##############################`);
}

module.exports = startServer;