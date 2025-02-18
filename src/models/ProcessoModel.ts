import connectDB from "../config/DataBase";
import { Processo } from "../types/Processo";

export class ProcessoModel {

    private inserTo: string = "INSERT INTO processos(nome, tipo, descricao, status, data_inicio, data_prazo,id_empresa, id_usuario) VALUES (?,?,?,?,?,?,?,?)";
    private updateSet: string = "UPDATE processos SET nome = ?, tipo = ? , descricao = ?, status = ?, data_inicio = ?, data_prazo = ?,id_empresa = ?, id_usuario = ?) WHERE id = ?";
    private selectIdEmpresa: string = "SELECT * FROM processos WHERE id_empresa = ?";
    private selectIdUsuario: string = "SELECT * FROM processos WHERE id_usuario = ?";
    private selectAll: string = "SELECT * FROM processos";
    private selectId: string = "SELECT * FROM processos WHERE id= ?";
    private delete: string = "DELETE FROM processos WHERE id = ?";

    public async getAll(): Promise<Processo[]> {
        const db = await connectDB();
        return db.all<Processo[]>(this.selectAll);
    }

    public async getByIdEmpresa(id: number): Promise<Processo[]> {
        const db = await connectDB();
        return db.all<Processo[]>(this.selectIdEmpresa, [id]);
    }

    public async getByIdUsuario(id: number): Promise<Processo[]> {
        const db = await connectDB();
        return db.all<Processo[]>(this.selectIdUsuario, [id]);
    }

    public async getById(id: number): Promise<Processo | null> {
        const db = await connectDB();
        const processo = await db.get<Processo>(this.selectId, [id]);
        return processo || null;
    }

    public async deleteById(id: number): Promise<void> {
        const db = await connectDB();
        await db.run(this.delete, [id]);
    }

    public async create(processo: Processo): Promise<void> {
        const db = await connectDB();

        await db.run(this.inserTo,
            [
                processo.getNome(),
                processo.getTipo(),
                processo.getDescricao(),
                processo.getStatus(),
                processo.getDataInicio(),
                processo.getDataPrazo(),
                processo.getIdEmpresa(),
                processo.getIdUsuario()
            ]
        );
    }

    public async update(id: number, processo: Processo): Promise<void> {
        const db = await connectDB();

        await db.run(this.updateSet,
            [
                processo.getNome(),
                processo.getTipo(),
                processo.getDescricao(),
                processo.getStatus(),
                processo.getDataInicio(),
                processo.getDataPrazo(),
                processo.getIdEmpresa(),
                processo.getIdUsuario()
            ]
        );
    }

}

export default new ProcessoModel();