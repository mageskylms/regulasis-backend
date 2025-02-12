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

    constructor(
        id: number,
        nome: string,
        nomeFantasia: string,
        cnpj: string,
        setor: string,
        enderecoSede: string,
        nomeResponsavel: string,
        contatoResponsavel: string,
        emailResponsavel: string,
        observacoes: string,
        tipo: string,
        idEmpresaSede: number
    ) {
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

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getNomeFantasia(): string {
        return this.nomeFantasia;
    }

    public setNomeFantasia(nomeFantasia: string): void {
        this.nomeFantasia = nomeFantasia;
    }

    public getCnpj(): string {
        return this.cnpj;
    }

    public setCnpj(cnpj: string): void {
        this.cnpj = cnpj;
    }

    public getSetor(): string {
        return this.setor;
    }

    public setSetor(setor: string): void {
        this.setor = setor;
    }

    public getEnderecoSede(): string {
        return this.enderecoSede;
    }

    public setEnderecoSede(enderecoSede: string): void {
        this.enderecoSede = enderecoSede;
    }

    public getNomeResponsavel(): string {
        return this.nomeResponsavel;
    }

    public setNomeResponsavel(nomeResponsavel: string): void {
        this.nomeResponsavel = nomeResponsavel;
    }

    public getContatoResponsavel(): string {
        return this.contatoResponsavel;
    }

    public setContatoResponsavel(contatoResponsavel: string): void {
        this.contatoResponsavel = contatoResponsavel;
    }

    public getEmailResponsavel(): string {
        return this.emailResponsavel;
    }

    public setEmailResponsavel(emailResponsavel: string): void {
        this.emailResponsavel = emailResponsavel;
    }

    public getObservacoes(): string {
        return this.observacoes;
    }

    public setObservacoes(observacoes: string): void {
        this.observacoes = observacoes;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public getIdEmpresaSede(): number {
        return this.idEmpresaSede;
    }

    public setIdEmpresaSede(idEmpresaSede: number): void {
        this.idEmpresaSede = idEmpresaSede;
    }

    public static fromJSON(json: any): Empresa {
        if (!json || typeof json !== 'object') {
            throw new Error('O objeto fornecido não é válido');
        }

        return new Empresa(
            json.id,
            json.nome,
            json.nomeFantasia,
            json.cnpj,
            json.setor,
            json.enderecoSede,
            json.nomeResponsavel,
            json.contatoResponsavel,
            json.emailResponsavel,
            json.observacoes,
            json.tipo,
            json.idEmpresaSede || null
        );

    }

}