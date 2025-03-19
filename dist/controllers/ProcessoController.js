"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Processo_1 = require("../types/Processo");
const ProcessoService_1 = __importDefault(require("../services/ProcessoService"));
class ProcessoController {
    async getAll(req, res) {
        try {
            const processos = await ProcessoService_1.default.getAll();
            return res.status(200).json(processos);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async getByIdEmpresa(req, res) {
        try {
            const { id } = req.params;
            const processos = await ProcessoService_1.default.getByIdEmpresa(Number(id));
            if (!processos || processos.length === 0) {
                return res.status(404).json({ message: "Nenhum processo encontrado para essa empresa" });
            }
            return res.status(200).json(processos); // Retorna o array de empresas
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async getByIdUsuario(req, res) {
        try {
            const { id } = req.params;
            const processos = await ProcessoService_1.default.getByIdEmpresa(Number(id));
            if (!processos || processos.length === 0) {
                return res.status(404).json({ message: "Nenhum processo encontrado para esse usuário." });
            }
            return res.status(200).json(processos); // Retorna o array de empresas
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async getById(req, res) {
        try {
            const { id } = req.params;
            const processo = await ProcessoService_1.default.getById(Number(id));
            if (!processo) {
                return res.status(404).json({ message: "Processo não encontrado" });
            }
            return res.status(200).json(processo);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            await ProcessoService_1.default.deleteById(Number(id));
            return res.status(200).json({ message: "Processo excluído com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params;
            const processoData = req.body;
            const processo = Processo_1.Processo.fromJSON(processoData);
            await ProcessoService_1.default.update(Number(id), processo);
            return res.status(200).json({ message: "Processo atualizado com sucesso" });
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    async create(req, res) {
        try {
            const processoData = req.body;
            const processo = Processo_1.Processo.fromJSON(processoData);
            await ProcessoService_1.default.create(processo);
            return res.status(201).json({ message: "Processo criada com sucesso" });
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.default = new ProcessoController();
