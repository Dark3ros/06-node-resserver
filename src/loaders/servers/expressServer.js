const express = require('express')
const config = require ('../../config');

class ExpressServer {

    constructor(){

        this.app = express();
        this.port = config.port;
        this.basePatchUser = `${config.api.preix}/users`;
        
        this._middlewares();
        this._routers();


    }

    _middlewares(){
        this.app.use(express.json());
    }
    _routers(){

        this.app.use(this.basePatchUser, require('../../routers/users'));
    }

    async start(){
        this.app.listen(this.port, (erros) => {
            if(err){
                console.log(err);
                process.exit(1);
                return;
            }
       })
    }

}

module.exports = ExpressServer;