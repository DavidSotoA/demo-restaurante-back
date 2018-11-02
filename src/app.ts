import * as express from "express";
import * as bodyParser from "body-parser";
import makeRoutes from './routes/routes';
import {createConnection} from "typeorm";
import "reflect-metadata";
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

    public createApp() {

        createConnection().then( async connection => {
            this.app = express();
            this.config();
            await makeRoutes(this.app);
            this.app.listen(process.env.PORT, () => {
                console.log('Express server listening on port ' + process.env.PORT);
            })

        })
        
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

export default new App();