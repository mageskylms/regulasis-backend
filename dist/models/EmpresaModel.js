"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaModel = void 0;
const DataBase_1 = __importDefault(require("../config/DataBase"));
class EmpresaModel {
    // Método para obter todas as empresas
    async getAll() {
        const db = await (0, DataBase_1.default)();
        return db.all("SELECT * FROM empresas");
    }
    async getByIdEmpresaSede(id) {
        const db = await (0, DataBase_1.default)();
        return db.all("SELECT * FROM empresas WHERE id_empresa_sede = ?", [id]);
    }
    // Método para obter uma empresa por ID
    async getById(id) {
        const db = await (0, DataBase_1.default)();
        const empresa = await db.get("SELECT * FROM empresas WHERE id = ?", [id]);
        return empresa || null;
    }
    // Método para criar uma nova empresa
    async create(empresa) {
        const db = await (0, DataBase_1.default)();
        await db.run(`INSERT INTO empresas (
        nome, 
        nome_fantasia, 
        cnpj, 
        setor, 
        endereco_sede, 
        nome_responsavel, 
        contato_responsavel, 
        email_responsavel, 
        observacoes, 
        tipo, 
        id_empresa_sede
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
            empresa.getNome(),
            empresa.getNomeFantasia(),
            empresa.getCnpj(),
            empresa.getSetor(),
            empresa.getEnderecoSede(),
            empresa.getNomeResponsavel(),
            empresa.getContatoResponsavel(),
            empresa.getEmailResponsavel(),
            empresa.getObservacoes(),
            empresa.getTipo(),
            empresa.getIdEmpresaSede() || null
        ]);
    }
    // Método para atualizar uma empresa
    async update(id, empresa) {
        const db = await (0, DataBase_1.default)();
        await db.run(`UPDATE empresas SET
        nome = ?,
        nome_fantasia = ?,
        cnpj = ?,
        setor = ?,
        endereco_sede = ?,
        nome_responsavel = ?,
        contato_responsavel = ?,
        email_responsavel = ?,
        observacoes = ?,
        tipo = ?,
        id_empresa_sede = ?
        WHERE id = ?`, [
            empresa.getNome(),
            empresa.getNomeFantasia(),
            empresa.getCnpj(),
            empresa.getSetor(),
            empresa.getEnderecoSede(),
            empresa.getNomeResponsavel(),
            empresa.getContatoResponsavel(),
            empresa.getEmailResponsavel(),
            empresa.getObservacoes(),
            empresa.getTipo(),
            empresa.getIdEmpresaSede() || null,
            id
        ]);
    }
    // Método para deletar uma empresa por ID
    async deleteById(id) {
        const db = await (0, DataBase_1.default)();
        await db.run("DELETE FROM empresas WHERE id = ?", [id]);
    }
}
exports.EmpresaModel = EmpresaModel;
// Exportando uma instância do modelo para uso
exports.default = new EmpresaModel();
