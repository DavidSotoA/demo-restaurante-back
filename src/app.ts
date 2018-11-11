import * as express from "express";
import * as bodyParser from "body-parser";
import makeRoutes from './routes/routes';
import {createConnection} from "typeorm";
import "reflect-metadata";

import TipoDeComida from "./models/TipoDeComida";
import TipoDeComidaController from "./controllers/TipodeComidaController";

import Controller from './controllers/ControllerInterface';
import Model from './models/ModelInterface';
import ComidaController from "./controllers/ComidaController";
import Comida from "./models/Comida";

var { buildSchema } = require('graphql');
var graphqlHTTP = require('express-graphql');

require('dotenv').config();

function cors(req: Request, res, next) : void {
    if (process.env.ACTIVE_CORS) {
        res.header("Access-Control-Allow-Origin", "*");
    } else {
        console.log('cors desactivado')
    }
    next();
}

function makeGraphQl() {
    let schema_type     = '',
        schema_query    = '',
        schema_mutation = '',
        root            = {}

    function addResource(resource_controller: Controller, resource_model: Model) {
        let name = resource_model.toString();

        schema_type  += resource_model.get_grapQl_type() + '\n\n' + resource_model.get_grapQl_input() + '\n\n';

        schema_query += `index_${name}: [${name}]!\n`;
        root[`index_${name}`] = resource_controller.index;

        schema_query += `show_${name}(id: Int!): ${name}!\n`;
        root[`show_${name}`] = resource_controller.show;

        schema_mutation += `store_${name}(${name[0].toLocaleLowerCase() + name.slice(1, name.length)}: ${name}Input!): ${name}!\n`
        root[`store_${name}`] = resource_controller.store;

        schema_mutation += `update_${name}(${name[0].toLocaleLowerCase() + name.slice(1, name.length)}: ${name}Input!, id: Int!): ${name}!\n`
        root[`update_${name}`] = resource_controller.update;

        schema_mutation += `destroy_${name}(id: Int!): ${name}!\n`
        root[`destroy_${name}`] = resource_controller.destroy;
    }

    function make() {

        schema_query    = `type Query {\n${schema_query}}\n`
        schema_mutation = `type Mutation {\n${schema_mutation}}`
        let schema = schema_type + schema_query + schema_mutation;

        console.log(schema);

        return {
            schema: buildSchema(schema),
            root: root
        }
    }

    return {
        addResource: addResource,
        make: make
    }
}


class App {

    public app: express.Application;

    public createApp() {

        createConnection().then( async connection => {
            this.app = express();
            this.config();
            // await makeRoutes(this.app);

            let grapql = makeGraphQl();
            grapql.addResource(new TipoDeComidaController(), new TipoDeComida(connection));
            grapql.addResource(new ComidaController(), new Comida());

            let sch = grapql.make();

            this.app.use('/graphql', graphqlHTTP({
                schema:     sch.schema,
                rootValue:  sch.root,
                graphiql:   true,
            }));
                
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