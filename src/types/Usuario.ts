export class Usuario {
    protected id: number;
    protected nome: string;
    protected email: string;
    protected user: string;
    protected password: string;
    protected regra: string;
    protected contato: string;

    constructor(
        id: number,
        nome: string,
        email: string,
        user: string,
        password: string,
        regra: string,
        contato: string
    ) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.user = user;
        this.password = password;
        this.regra = regra;
        this.contato = contato;
    }

    getId(): number {
        return this.id;
    }

    getNome(): string {
        return this.nome;
    }

    getEmail(): string {
        return this.email;
    }

    getUser(): string {
        return this.user;
    }

    getPassword(): string {
        return this.password;
    }

    getRegra(): string {
        return this.regra;
    }

    getContato(): string {
        return this.contato;
    }

    setId(id: number): void {
        this.id = id;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    setUser(user: string): void {
        this.user = user;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    setRegra(regra: string): void {
        this.regra = regra;
    }

    setContato(contato: string): void {
        this.contato = contato;
    }

    static fromJSON(json: any): Usuario {
        if (!json || typeof json !== 'object') {
            throw new Error('O objeto fornecido não é válido');
        }

        return new Usuario(
            json.id,
            json.nome,
            json.email,
            json.user,
            json.password,
            json.regra,
            json.contato
        );
    }
}
