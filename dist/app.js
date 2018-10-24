"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes/routes");
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
class App {
    constructor() {
        this.appRoutes = new routes_1.Routes;
        this.app = express();
        this.config();
        this.appRoutes.setRoutes(this.app);
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
exports.default = new App().app;
//# sourceMappingURL=app.js.map