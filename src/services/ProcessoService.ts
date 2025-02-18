import ProcessoModel from "../models/ProcessoModel";
import { Processo } from "../types/Processo";

class ProcessoService {

    public async getAll(): Promise<Processo[]> {
        return await ProcessoModel.getAll();
    }

    public async getByIdEmpresa(id: number): Promise<Processo[] | null> {
        return await ProcessoModel.getByIdEmpresa(id);
    }

    public async getByIdUsuario(id: number): Promise<Processo[] | null> {
        return await ProcessoModel.getByIdUsuario(id);
    }

    public async getById(id: number): Promise<Processo | null> {
        return await ProcessoModel.getById(id);
    }

    public async deleteById(id: number): Promise<void> {
        await ProcessoModel.deleteById(id);
    }

    public async create(empresa: Processo): Promise<void> {
        await ProcessoModel.create(empresa);
    }

    public async update(id: number, processo: Processo): Promise<void> {
        await ProcessoModel.update(id, processo);
    }

}

export default new ProcessoService();