"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
class Empresa {
    id;
    nome;
    nomeFantasia;
    cnpj;
    setor;
    enderecoSede;
    nomeResponsavel;
    contatoResponsavel;
    emailResponsavel;
    observacoes;
    tipo;
    idEmpresaSede;
    constructor(id, nome, nomeFantasia, cnpj, setor, enderecoSede, nomeResponsavel, contatoResponsavel, emailResponsavel, observacoes, tipo, idEmpresaSede) {
        this.id = id;
        this.nome = nome;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.setor = setor;
        this.enderecoSede = enderecoSede;
        this.nomeResponsavel = nomeResponsavel;
        this.contatoResponsavel = contatoResponsavel;
        this.emailResponsavel = emailResponsavel;
        this.observacoes = observacoes;
        this.tipo = tipo;
        this.idEmpresaSede = idEmpresaSede;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getNomeFantasia() {
        return this.nomeFantasia;
    }
    setNomeFantasia(nomeFantasia) {
        this.nomeFantasia = nomeFantasia;
    }
    getCnpj() {
        return this.cnpj;
    }
    setCnpj(cnpj) {
        this.cnpj = cnpj;
    }
    getSetor() {
        return this.setor;
    }
    setSetor(setor) {
        this.setor = setor;
    }
    getEnderecoSede() {
        return this.enderecoSede;
    }
    setEnderecoSede(enderecoSede) {
        this.enderecoSede = enderecoSede;
    }
    getNomeResponsavel() {
        return this.nomeResponsavel;
    }
    setNomeResponsavel(nomeResponsavel) {
        this.nomeResponsavel = nomeResponsavel;
    }
    getContatoResponsavel() {
        return this.contatoResponsavel;
    }
    setContatoResponsavel(contatoResponsavel) {
        this.contatoResponsavel = contatoResponsavel;
    }
    getEmailResponsavel() {
        return this.emailResponsavel;
    }
    setEmailResponsavel(emailResponsavel) {
        this.emailResponsavel = emailResponsavel;
    }
    getObservacoes() {
        return this.observacoes;
    }
    setObservacoes(observacoes) {
        this.observacoes = observacoes;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getIdEmpresaSede() {
        return this.idEmpresaSede;
    }
    setIdEmpresaSede(idEmpresaSede) {
        this.idEmpresaSede = idEmpresaSede;
    }
    static fromJSON(json) {
        if (!json || typeof json !== 'object') {
            throw new Error('O objeto fornecido não é válido');
        }
        return new Empresa(json.id, json.nome, json.nomeFantasia, json.cnpj, json.setor, json.enderecoSede, json.nomeResponsavel, json.contatoResponsavel, json.emailResponsavel, json.observacoes, json.tipo, json.idEmpresaSede || null);
    }
}
exports.Empresa = Empresa;
