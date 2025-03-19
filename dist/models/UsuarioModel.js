"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioModel = void 0;
const DataBase_1 = __importDefault(require("../config/DataBase"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UsuarioModel {
    inserTo = "INSERT INTO usuarios(nome, contato, regra, email, user, password) VALUES (?,?,?,?,?,?)";
    updateSet = "UPDATE usuarios SET nome = ?, contato = ? , regra = ?, email = ?, password = ? WHERE id = ?";
    selectUser = "SELECT * FROM usuarios WHERE user = ?";
    selectRegra = "SELECT * FROM usuarios WHERE regra = ?";
    selectAll = "SELECT * FROM usuarios";
    selectId = "SELECT * FROM usuarios WHERE id= ?";
    delete = "DELETE FROM usuarios WHERE id = ?";
    async getAll() {
        const db = await (0, DataBase_1.default)();
        return db.all(this.selectAll);
    }
    async getByUser(user) {
        const db = await (0, DataBase_1.default)();
        const usuario = await db.get(this.selectUser, [user]);
        return usuario || null;
    }
    async getByRegra(regra) {
        const db = await (0, DataBase_1.default)();
        return db.all(this.selectRegra, [regra]);
    }
    async getById(id) {
        const db = await (0, DataBase_1.default)();
        const usuario = await db.get(this.selectId, [id]);
        return usuario || null;
    }
    async deleteById(id) {
        const db = await (0, DataBase_1.default)();
        await db.run(this.delete, [id]);
    }
    async create(usuario) {
        const db = await (0, DataBase_1.default)();
        // Criptografando a senha
        const salt = bcryptjs_1.default.genSaltSync(10);
        const hashedPassword = bcryptjs_1.default.hashSync(usuario.getPassword(), salt);
        await db.run(this.inserTo, [
            usuario.getNome(),
            usuario.getContato(),
            usuario.getRegra(),
            usuario.getEmail(),
            usuario.getUser(),
            hashedPassword
        ]);
    }
    async update(id, usuario) {
        const db = await (0, DataBase_1.default)();
        await db.run(this.updateSet, [
            usuario.getNome(),
            usuario.getContato(),
            usuario.getRegra(),
            usuario.getEmail(),
            usuario.getPassword(),
            usuario.getUser()
        ]);
    }
}
exports.UsuarioModel = UsuarioModel;
exports.default = new UsuarioModel();
