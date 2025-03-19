"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmpresaService_1 = __importDefault(require("../services/EmpresaService"));
const Empresa_1 = require("../types/Empresa");
class EmpresaController {
    async getAll(req, res) {
        try {
            const empresas = await EmpresaService_1.default.getAll();
            return res.status(200).json(empresas);
        }
        catch (error) {
            console.error('Erro ao obter todas as empresas:', error);
            return res.status(500).json({ error: error.message });
        }
    }
    async getById(req, res) {
        try {
            const { id } = req.params;
            const empresa = await EmpresaService_1.default.getById(Number(id));
            if (!empresa) {
                return res.status(404).json({ message: "Empresa não encontrada" });
            }
            return res.status(200).json(empresa);
        }
        catch (error) {
            console.error('Erro ao obter empresa', error);
            return res.status(500).json({ error: error.message });
        }
    }
    async getByIdEmpresaSede(req, res) {
        try {
            const { id } = req.params;
            const empresas = await EmpresaService_1.default.getByIdEmpresaSede(Number(id));
            if (!empresas || empresas.length === 0) {
                return res.status(404).json({ message: "Nenhuma empresa encontrada" });
            }
            return res.status(200).json(empresas); // Retorna o array de empresas
        }
        catch (error) {
            console.error('Erro ao obter empresa sede', error);
            return res.status(500).json({ error: error.message });
        }
    }
    async create(req, res) {
        try {
            const empresaData = req.body;
            const empresa = Empresa_1.Empresa.fromJSON(empresaData);
            await EmpresaService_1.default.createEmpresa(empresa);
            return res.status(201).json({ message: "Empresa criada com sucesso" });
        }
        catch (error) {
            console.error('Erro ao criar empresa', error);
            return res.status(400).json({ error: error.message });
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params;
            const empresaData = req.body;
            const empresa = Empresa_1.Empresa.fromJSON(empresaData);
            await EmpresaService_1.default.update(Number(id), empresa);
            return res.status(200).json({ message: "Empresa atualizada com sucesso" });
        }
        catch (error) {
            console.error('Erro ao editar empresa.', error);
            return res.status(400).json({ error: error.message });
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            await EmpresaService_1.default.deleteById(Number(id));
            return res.status(200).json({ message: "Empresa excluída com sucesso" });
        }
        catch (error) {
            console.error('Erro ao deletar empresa', error);
            return res.status(500).json({ error: error.message });
        }
    }
}
exports.default = new EmpresaController();
