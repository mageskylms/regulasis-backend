"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsuarioModel_1 = __importDefault(require("../models/UsuarioModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UsuarioService {
    async getAll() {
        return await UsuarioModel_1.default.getAll();
    }
    async getByUser(user) {
        return await UsuarioModel_1.default.getByUser(user);
    }
    async getByRegra(regra) {
        return await UsuarioModel_1.default.getByRegra(regra);
    }
    async getById(id) {
        return await UsuarioModel_1.default.getById(id);
    }
    async deleteById(id) {
        await UsuarioModel_1.default.deleteById(id);
    }
    async create(usuario) {
        await UsuarioModel_1.default.create(usuario);
    }
    async update(id, usuario) {
        await UsuarioModel_1.default.update(id, usuario);
    }
    // Método de login
    async login(user, password) {
        const usuario = await UsuarioModel_1.default.getByUser(user);
        if (!usuario) {
            throw new Error('Email ou senha incorretos');
        }
        // Verificando a senha
        const passwordMatch = bcryptjs_1.default.compareSync(password, usuario.getPassword());
        if (!passwordMatch) {
            throw new Error('Email ou senha incorretos');
        }
        // Gerando o token JWT
        const token = jsonwebtoken_1.default.sign({ id: usuario.getId, user: usuario.getUser, regra: usuario.getRegra }, 'secreta', { expiresIn: '1h' });
        return token;
    }
}
exports.default = new UsuarioService();
