"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessoModel = void 0;
const DataBase_1 = __importDefault(require("../config/DataBase"));
class ProcessoModel {
    inserTo = "INSERT INTO processos(nome, tipo, descricao, status, data_inicio, data_prazo,id_empresa, id_usuario) VALUES (?,?,?,?,?,?,?,?)";
    updateSet = "UPDATE processos SET nome = ?, tipo = ? , descricao = ?, status = ?, data_inicio = ?, data_prazo = ?,id_empresa = ?, id_usuario = ? WHERE id = ?";
    selectIdEmpresa = "SELECT * FROM processos WHERE id_empresa = ?";
    selectIdUsuario = "SELECT * FROM processos WHERE id_usuario = ?";
    selectAll = "SELECT * FROM processos";
    selectId = "SELECT * FROM processos WHERE id= ?";
    delete = "DELETE FROM processos WHERE id = ?";
    async getAll() {
        const db = await (0, DataBase_1.default)();
        return db.all(this.selectAll);
    }
    async getByIdEmpresa(id) {
        const db = await (0, DataBase_1.default)();
        return db.all(this.selectIdEmpresa, [id]);
    }
    async getByIdUsuario(id) {
        const db = await (0, DataBase_1.default)();
        return db.all(this.selectIdUsuario, [id]);
    }
    async getById(id) {
        const db = await (0, DataBase_1.default)();
        const processo = await db.get(this.selectId, [id]);
        return processo || null;
    }
    async deleteById(id) {
        const db = await (0, DataBase_1.default)();
        await db.run(this.delete, [id]);
    }
    async create(processo) {
        const db = await (0, DataBase_1.default)();
        await db.run(this.inserTo, [
            processo.getNome(),
            processo.getTipo(),
            processo.getDescricao(),
            processo.getStatus(),
            processo.getDataInicio(),
            processo.getDataPrazo(),
            processo.getIdEmpresa(),
            processo.getIdUsuario()
        ]);
    }
    async update(id, processo) {
        const db = await (0, DataBase_1.default)();
        await db.run(this.updateSet, [
            processo.getNome(),
            processo.getTipo(),
            processo.getDescricao(),
            processo.getStatus(),
            processo.getDataInicio(),
            processo.getDataPrazo(),
            processo.getIdEmpresa(),
            processo.getIdUsuario()
        ]);
    }
}
exports.ProcessoModel = ProcessoModel;
exports.default = new ProcessoModel();
