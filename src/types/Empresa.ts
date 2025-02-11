import { EmpresaAttributes } from "./EmpresaAttributes";

export class Empresa {
    protected id: number;
    protected nome: string;
    protected nomeFantasia: string;
    protected cnpj: string;
    protected setor: string;
    protected enderecoSede: string;
    protected nomeResponsavel: string;
    protected contatoResponsavel: string;
    protected emailResponsavel: string;
    protected observacoes: string;
    protected tipo: string;
    protected idEmpresaSede: number;

    constructor(attrs: EmpresaAttributes) {
        this.id = attrs.id;
        this.nome = attrs.nome;
        this.nomeFantasia = attrs.nomeFantasia;
        this.cnpj = attrs.cnpj;
        this.setor = attrs.setor;
        this.enderecoSede = attrs.enderecoSede;
        this.nomeResponsavel = attrs.nomeResponsavel;
        this.contatoResponsavel = attrs.contatoResponsavel;
        this.emailResponsavel = attrs.emailResponsavel;
        this.observacoes = attrs.observacoes;
        this.tipo = attrs.tipo;
        this.idEmpresaSede = attrs.idEmpresaSede;
    }

    public getAttributes(): EmpresaAttributes {
        return {
            id: this.id,
            nome: this.nome,
            nomeFantasia: this.nomeFantasia,
            cnpj: this.cnpj,
            setor: this.setor,
            enderecoSede: this.enderecoSede,
            nomeResponsavel: this.nomeResponsavel,
            contatoResponsavel: this.contatoResponsavel,
            emailResponsavel: this.emailResponsavel,
            observacoes: this.observacoes,
            tipo: this.tipo,
            idEmpresaSede: this.idEmpresaSede,
        };
    }

    public setAttributes(attrs: EmpresaAttributes): void {
        this.id = attrs.id;
        this.nome = attrs.nome;
        this.nomeFantasia = attrs.nomeFantasia;
        this.cnpj = attrs.cnpj;
        this.setor = attrs.setor;
        this.enderecoSede = attrs.enderecoSede;
        this.nomeResponsavel = attrs.nomeResponsavel;
        this.contatoResponsavel = attrs.contatoResponsavel;
        this.emailResponsavel = attrs.emailResponsavel;
        this.observacoes = attrs.observacoes;
        this.tipo = attrs.tipo;
        this.idEmpresaSede = attrs.idEmpresaSede;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

}

