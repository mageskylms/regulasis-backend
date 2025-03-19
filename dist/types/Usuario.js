"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    id;
    nome;
    email;
    user;
    password;
    regra;
    contato;
    constructor(id, nome, email, user, password, regra, contato) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.user = user;
        this.password = password;
        this.regra = regra;
        this.contato = contato;
    }
    getId() {
        return this.id;
    }
    getNome() {
        return this.nome;
    }
    getEmail() {
        return this.email;
    }
    getUser() {
        return this.user;
    }
    getPassword() {
        return this.password;
    }
    getRegra() {
        return this.regra;
    }
    getContato() {
        return this.contato;
    }
    setId(id) {
        this.id = id;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setEmail(email) {
        this.email = email;
    }
    setUser(user) {
        this.user = user;
    }
    setPassword(password) {
        this.password = password;
    }
    setRegra(regra) {
        this.regra = regra;
    }
    setContato(contato) {
        this.contato = contato;
    }
    static fromJSON(json) {
        if (!json || typeof json !== 'object') {
            throw new Error('O objeto fornecido não é válido');
        }
        return new Usuario(json.id, json.nome, json.email, json.user, json.password, json.regra, json.contato);
    }
}
exports.Usuario = Usuario;
