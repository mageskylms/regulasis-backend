"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProcessoModel_1 = __importDefault(require("../models/ProcessoModel"));
class ProcessoService {
    async getAll() {
        return await ProcessoModel_1.default.getAll();
    }
    async getByIdEmpresa(id) {
        return await ProcessoModel_1.default.getByIdEmpresa(id);
    }
    async getByIdUsuario(id) {
        return await ProcessoModel_1.default.getByIdUsuario(id);
    }
    async getById(id) {
        return await ProcessoModel_1.default.getById(id);
    }
    async deleteById(id) {
        await ProcessoModel_1.default.deleteById(id);
    }
    async create(empresa) {
        await ProcessoModel_1.default.create(empresa);
    }
    async update(id, processo) {
        await ProcessoModel_1.default.update(id, processo);
    }
}
exports.default = new ProcessoService();
