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
class xxx1541129743045 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "tipo_de_comida" DROP COLUMN "create_date"`);
            yield queryRunner.query(`ALTER TABLE "tipo_de_comida" DROP COLUMN "update_date"`);
            yield queryRunner.query(`ALTER TABLE "tipo_de_comida" DROP COLUMN "nombre"`);
            yield queryRunner.query(`ALTER TABLE "tipo_de_comida" ADD "nombre" character varying NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "tipo_de_comida" DROP COLUMN "nombre"`);
            yield queryRunner.query(`ALTER TABLE "tipo_de_comida" ADD "nombre" character varying(100) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "tipo_de_comida" ADD "update_date" TIMESTAMP`);
            yield queryRunner.query(`ALTER TABLE "tipo_de_comida" ADD "create_date" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP`);
        });
    }
}
exports.xxx1541129743045 = xxx1541129743045;
//# sourceMappingURL=1541129743045-xxx.js.map