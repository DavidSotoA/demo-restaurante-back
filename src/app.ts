import * as express from "express";
import * as bodyParser from "body-parser";
import makeRoutes from './routes/routes';
import TipoDeComidaController from './controllers/TipodeComidaController';

require('dotenv').config();

function cors(req: Request, res, next) : void {
    if (process.env.ACTIVE_CORS) {
        res.header("Access-Control-Allow-Origin", "*");
    } else {
        console.log('cors desactivado')
    }
    next();
}

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();

        makeRoutes(this.app);
    }


    private config(): void {
        // activar cors
        this.app.use(cors);
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;