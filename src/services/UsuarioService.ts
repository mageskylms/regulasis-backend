import UsuarioModel from '../models/UsuarioModel';
import { Usuario } from './../types/Usuario';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


class UsuarioService {

    public async getAll(): Promise<Usuario[]> {
        return await UsuarioModel.getAll();
    }

    public async getByUser(user: string): Promise<Usuario | null> {
        return await UsuarioModel.getByUser(user);
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

    // Método de login
    public async login(user: string, password: string): Promise<string | null> {
        const usuario = await UsuarioModel.getByUser(user);

        if (!usuario) {
            throw new Error('Email ou senha incorretos');
        }

        // Verificando a senha
        const passwordMatch = bcrypt.compareSync(password, usuario.getPassword());
        if (!passwordMatch) {
            throw new Error('Email ou senha incorretos');
        }

        // Gerando o token JWT
        const token = jwt.sign({ id: usuario.getId, user: usuario.getUser, regra: usuario.getRegra}, 'secreta', { expiresIn: '1h' });
        return token;
    }

}

export default new UsuarioService();