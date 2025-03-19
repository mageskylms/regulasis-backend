"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmpresaModel_1 = __importDefault(require("../models/EmpresaModel"));
class EmpresaService {
    // Método para obter todas as empresas
    async getAll() {
        return await EmpresaModel_1.default.getAll();
    }
    // Método para obter uma empresa por ID
    async getById(id) {
        return await EmpresaModel_1.default.getById(id);
    }
    async getByIdEmpresaSede(id) {
        return await EmpresaModel_1.default.getByIdEmpresaSede(id);
    }
    // Método para criar uma nova empresa
    async createEmpresa(empresa) {
        await EmpresaModel_1.default.create(empresa);
    }
    // Método para atualizar uma empresa existente
    async update(id, empresa) {
        await EmpresaModel_1.default.update(id, empresa);
    }
    // Método para deletar uma empresa por ID
    async deleteById(id) {
        await EmpresaModel_1.default.deleteById(id);
    }
}
// Exportando a instância do serviço para uso
exports.default = new EmpresaService();
