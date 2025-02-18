export class Processo {
    protected id: number;
    protected nome: string;
    protected tipo: string;
    protected descricao: string;
    protected status: string;
    protected dataInicio: string;
    protected dataPrazo: string;
    protected idEmpresa: number;
    protected idUsuario: number;

    constructor(
        id: number,
        nome: string,
        tipo: string,
        descricao: string,
        status: string,
        dataInicio: string,
        dataPrazo: string,
        idEmpresa: number,
        idUsuario: number
    ) {
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
    public getId(): number {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getStatus(): string {
        return this.status;
    }

    public getDataInicio(): string {
        return this.dataInicio;
    }

    public getDataPrazo(): string {
        return this.dataPrazo;
    }

    public getIdEmpresa(): number {
        return this.idEmpresa;
    }

    public getIdUsuario(): number {
        return this.idUsuario;
    }

    // Setters
    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    public setDataInicio(dataInicio: string): void {
        this.dataInicio = dataInicio;
    }

    public setDataPrazo(dataPrazo: string): void {
        this.dataPrazo = dataPrazo;
    }

    public setIdEmpresa(idEmpresa: number): void {
        this.idEmpresa = idEmpresa;
    }

    public setIdUsuario(idUsuario: number): void {
        this.idUsuario = idUsuario;
    }

    public static fromJSON(json: any): Processo {
        if (!json || typeof json !== 'object') {
            throw new Error('O objeto fornecido não é válido');
        }

        return new Processo(
            json.id,
            json.nome,
            json.tipo,
            json.descricao,
            json.status,
            json.dataInicio,
            json.dataPrazo,
            json.idEmpresa,
            json.idUsuario,
        );

    }

}
