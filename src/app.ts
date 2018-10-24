import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from './routes/routes';

require('dotenv').config();

function cors(req, res, next) {
    if (process.env.ACTIVE_CORS) {
        res.header("Access-Control-Allow-Origin", "*");
    } else {
        console.log('cors desactivado')
    }
    next();
}

class App {

    public app: express.Application;
    public appRoutes: Routes = new Routes;

    constructor() {
        this.app = express();
        this.config();        
        this.appRoutes.setRoutes(this.app);
    }

    private config(): void{
        // activar cors
        this.app.use(cors);
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));


    }

}

export default new App().app;