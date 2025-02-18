import EmpresaModel from "../models/EmpresaModel";
import { Empresa } from "../types/Empresa";

class EmpresaService {

    // Método para obter todas as empresas
    public async getAll(): Promise<Empresa[]> {
        return await EmpresaModel.getAll();
    }

    // Método para obter uma empresa por ID
    public async getById(id: number): Promise<Empresa | null> {
        return await EmpresaModel.getById(id);
    }

    public async getByIdEmpresaSede(id: number): Promise<Empresa[] | null> {
        return await EmpresaModel.getByIdEmpresaSede(id);
    }

    // Método para criar uma nova empresa
    public async createEmpresa(empresa: Empresa): Promise<void> {
        await EmpresaModel.create(empresa);
    }

    // Método para atualizar uma empresa existente
    public async update(id: number, empresa: Empresa): Promise<void> {
        await EmpresaModel.update(id, empresa);
    }

    // Método para deletar uma empresa por ID
    public async deleteById(id: number): Promise<void> {
        await EmpresaModel.deleteById(id);
    }

}

// Exportando a instância do serviço para uso
export default new EmpresaService();