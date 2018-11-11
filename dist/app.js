"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const TipoDeComida_1 = require("./models/TipoDeComida");
const TipodeComidaController_1 = require("./controllers/TipodeComidaController");
var { buildSchema } = require('graphql');
var graphqlHTTP = require('express-graphql');
require('dotenv').config();
function cors(req, res, next) {
    if (process.env.ACTIVE_CORS) {
        res.header("Access-Control-Allow-Origin", "*");
    }
    else {
        console.log('cors desactivado');
    }
    next();
}
function makeGraphQl() {
    let schema_type = '', schema_query = '', root = {};
    function addResource(resource_controller, resource_model) {
        let name = resource_model.toString();
        schema_type += resource_model.get_grapQl_type() + '\n\n';
        schema_query += `index_${name}: [${name}]\n`;
        root[`index_${name}`] = resource_controller.index;
    }
    function make() {
        schema_query = `type Query {\n${schema_query}}`;
        let schema = schema_type + schema_query;
        return {
            schema: buildSchema(schema),
            root: root
        };
    }
    return {
        addResource: addResource,
        make: make
    };
}
class App {
    createApp() {
        typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
            this.app = express();
            this.config();
            // await makeRoutes(this.app);
            let grapql = makeGraphQl();
            grapql.addResource(new TipodeComidaController_1.default(), new TipoDeComida_1.default());
            let sch = grapql.make();
            this.app.use('/graphql', graphqlHTTP({
                schema: sch.schema,
                rootValue: sch.root,
                graphiql: true,
            }));
            this.app.listen(process.env.PORT, () => {
                console.log('Express server listening on port ' + process.env.PORT);
            });
        }));
    }
    config() {
        // activar cors
        this.app.use(cors);
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App();
//# sourceMappingURL=app.js.map