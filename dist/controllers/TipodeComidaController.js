"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConnection_1 = require("../dbConnection");
class TipoDeComidaController {
    index(req, res) {
        dbConnection_1.default.many("SELECT id, nombre, descripcion, imagen FROM tipo_de_comida")
            .then(data => {
            res.status(200).send({
                tipos_de_comida: data
            });
        })
            .catch(error => {
            console.log("ERROR:", error);
        });
    }
    show(req, res) { }
    store(req, res) { }
    update(req, res) { }
    destroy(req, res) { }
}
exports.default = new TipoDeComidaController();
//# sourceMappingURL=TipodeComidaController.js.map