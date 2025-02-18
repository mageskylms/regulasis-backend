import UsuarioModel from '../models/UsuarioModel';
import { Usuario } from './../types/Usuario';

class ProcessoService {

    public async getAll(): Promise<Usuario[]> {
        return await UsuarioModel.getAll();
    }

    public async getByEmail(email: string): Promise<Usuario | null> {
        return await UsuarioModel.getByEmail(email);
    }

    public async getByRegra(regra: string): Promise<Usuario[] | null> {
        return await UsuarioModel.getByRegra(regra);
    }

    public async getById(id: number): Promise<Usuario | null> {
        return await UsuarioModel.getById(id);
    }

    public async deleteById(id: number): Promise<void> {
        await UsuarioModel.deleteById(id);
    }

    public async create(usuario: Usuario): Promise<void> {
        await UsuarioModel.create(usuario);
    }

    public async update(id: number, usuario: Usuario): Promise<void> {
        await UsuarioModel.update(id, usuario);
    }

}

export default new ProcessoService();