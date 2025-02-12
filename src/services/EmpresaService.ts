// src/services/EmpresaService.ts
import EmpresaModel from "../models/EmpresaModel";
import { Empresa } from "../types/Empresa";

class EmpresaService {
    // Retorna todas as empresas
    public async getAll(): Promise<Empresa[]> {
        return await EmpresaModel.getAll();
    }

    // Retorna uma empresa pelo ID
    public async getById(id: number): Promise<Empresa | null> {
        return await EmpresaModel.getById(id);
    }

    // Cria uma nova empresa (pode incluir validações extras aqui)
    public async create(empresa: Empresa): Promise<void> {
        // Exemplo de validação: Nome não pode ser vazio
        if (!empresa.getAttributes().nome) {
            throw new Error("O nome da empresa é obrigatório.");
        }
        // Outras regras de negócio podem ser aplicadas aqui
        await EmpresaModel.create(empresa);
    }

    // Atualiza uma empresa existente
    public async update(id: number, empresa: Empresa): Promise<void> {
        // Adicione validações ou regras extras se necessário
        await EmpresaModel.update(id, empresa);
    }

    // Exclui uma empresa pelo ID
    public async deleteById(id: number): Promise<void> {
        await EmpresaModel.deleteById(id);
    }
}

export default new EmpresaService();