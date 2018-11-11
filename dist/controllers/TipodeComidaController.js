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
const typeorm_1 = require("typeorm");
const TipoDeComida_1 = require("../models/TipoDeComida");
require('dotenv').config();
// type Query {
//     index_tipoDeComida(): [TipoDeComida],
//     show_tipoDeComida(id: number): TipoDeComida,
//   }
// type Mutation {
//     store_tipoDeComida(tipoDeComida: TipoDeComida): TipoDeComida
//     update_tipoDeComida(id: number): TipoDeComida
//     destroy_tipoDeComida(id: number): TipoDeComida
// }
class TipoDeComidaController {
    constructor() {
        this.repo = typeorm_1.getManager().getRepository(TipoDeComida_1.default);
        this.index = this.index.bind(this);
        this.show = this.show.bind(this);
        this.store = this.store.bind(this);
        this.update = this.update.bind(this);
        this.destroy = this.destroy.bind(this);
        this.setUrl = this.setUrl.bind(this);
    }
    setUrl(url) {
        this.url = url;
    }
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.repo.find();
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                let data = yield this.repo.find({ id: id });
                res.status(200).send(data[0]);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    destroy(req, res) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.default = TipoDeComidaController;
//# sourceMappingURL=TipodeComidaController.js.map