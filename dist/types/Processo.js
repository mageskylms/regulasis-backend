"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Processo = void 0;
class Processo {
    id;
    nome;
    tipo;
    descricao;
    status;
    dataInicio;
    dataPrazo;
    idEmpresa;
    idUsuario;
    constructor(id, nome, tipo, descricao, status, dataInicio, dataPrazo, idEmpresa, idUsuario) {
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.descricao = descricao;
        this.status = status;
        this.dataInicio = dataInicio;
        this.dataPrazo = dataPrazo;
        this.idEmpresa = idEmpresa;
        this.idUsuario = idUsuario;
    }
    // Getters
    getId() {
        return this.id;
    }
    getNome() {
        return this.nome;
    }
    getTipo() {
        return this.tipo;
    }
    getDescricao() {
        return this.descricao;
    }
    getStatus() {
        return this.status;
    }
    getDataInicio() {
        return this.dataInicio;
    }
    getDataPrazo() {
        return this.dataPrazo;
    }
    getIdEmpresa() {
        return this.idEmpresa;
    }
    getIdUsuario() {
        return this.idUsuario;
    }
    // Setters
    setNome(nome) {
        this.nome = nome;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }
    setStatus(status) {
        this.status = status;
    }
    setDataInicio(dataInicio) {
        this.dataInicio = dataInicio;
    }
    setDataPrazo(dataPrazo) {
        this.dataPrazo = dataPrazo;
    }
    setIdEmpresa(idEmpresa) {
        this.idEmpresa = idEmpresa;
    }
    setIdUsuario(idUsuario) {
        this.idUsuario = idUsuario;
    }
    static fromJSON(json) {
        if (!json || typeof json !== 'object') {
            throw new Error('O objeto fornecido não é válido');
        }
        return new Processo(json.id, json.nome, json.tipo, json.descricao, json.status, json.dataInicio, json.dataPrazo, json.idEmpresa, json.idUsuario);
    }
}
exports.Processo = Processo;
