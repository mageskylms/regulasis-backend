"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsuarioService_1 = __importDefault(require("../services/UsuarioService"));
const Usuario_1 = require("../types/Usuario");
const SECRET_KEY = "chave_secreta_do_regulasis";
class UsuarioConstroller {
    async getAll(req, res) {
        try {
            const usuarios = await UsuarioService_1.default.getAll();
            return res.status(200).json(usuarios);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async getByUser(req, res) {
        try {
            const { user } = req.params;
            const usuario = await UsuarioService_1.default.getByUser(String(user));
            if (!usuario) {
                return res.status(404).json({ message: "Nenhum usuário encontrado." });
            }
            return res.status(200).json(usuario);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async getByRegra(req, res) {
        try {
            const { regra } = req.params;
            const usuarios = await UsuarioService_1.default.getByRegra(String(regra));
            if (!usuarios || usuarios.length === 0) {
                return res.status(404).json({ message: "Nenhum usuário encontrado para essa regra." });
            }
            return res.status(200).json(usuarios); // Retorna o array de empresas
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async getById(req, res) {
        try {
            const { id } = req.params;
            const usuario = await UsuarioService_1.default.getById(Number(id));
            if (!usuario) {
                return res.status(404).json({ message: "Usuário não encontrado" });
            }
            return res.status(200).json({ usuario });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            await UsuarioService_1.default.deleteById(Number(id));
            return res.status(200).json({ message: "Usuário excluído com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params;
            const userData = req.body;
            const usuario = Usuario_1.Usuario.fromJSON(userData);
            await UsuarioService_1.default.update(Number(id), usuario);
            return res.status(200).json({ message: "Usuário atualizado com sucesso" });
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    async create(req, res) {
        try {
            const usuarioData = req.body;
            const usuario = Usuario_1.Usuario.fromJSON(usuarioData);
            await UsuarioService_1.default.create(usuario);
            return res.status(201).json({ message: "Usuário criado com sucesso" });
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
exports.default = new UsuarioConstroller();
