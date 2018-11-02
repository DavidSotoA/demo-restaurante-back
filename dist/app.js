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
const routes_1 = require("./routes/routes");
const typeorm_1 = require("typeorm");
require("reflect-metadata");
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
    createApp() {
        typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
            this.app = express();
            this.config();
            yield routes_1.default(this.app);
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