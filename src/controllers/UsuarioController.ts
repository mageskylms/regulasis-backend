import bcrypt from 'bcryptjs';
import { Request, Response } from "express";
import UsuarioService from "../services/UsuarioService";
import { Usuario } from "../types/Usuario";
import jwt from "jsonwebtoken";

const SECRET_KEY = "chave_secreta_do_regulasis";

class UsuarioConstroller {

    public async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const usuarios = await UsuarioService.getAll();
            return res.status(200).json(usuarios);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    public async getByUser(req: Request, res: Response): Promise<Response> {
        try {
            const { user } = req.params;
            const usuario = await UsuarioService.getByUser(String(user));

            if (!usuario) {
                return res.status(404).json({ message: "Nenhum usuário encontrado." });
            }

            return res.status(200).json(usuario);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    public async getByRegra(req: Request, res: Response): Promise<Response> {
        try {
            const { regra } = req.params;
            const usuarios = await UsuarioService.getByRegra(String(regra));

            if (!usuarios || usuarios.length === 0) {
                return res.status(404).json({ message: "Nenhum usuário encontrado para essa regra." });
            }

            return res.status(200).json(usuarios);  // Retorna o array de empresas
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    public async getById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const usuario = await UsuarioService.getById(Number(id));

            if (!usuario) {
                return res.status(404).json({ message: "Usuário não encontrado" });
            }

            return res.status(200).json({ usuario });
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            await UsuarioService.deleteById(Number(id));
            return res.status(200).json({ message: "Usuário excluído com sucesso" });
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const userData = req.body;
            const usuario = Usuario.fromJSON(userData);
            await UsuarioService.update(Number(id), usuario);
            return res.status(200).json({ message: "Usuário atualizado com sucesso" });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    public async create(req: Request, res: Response): Promise<Response> {
        try {

            const usuarioData = req.body;
            const usuario = Usuario.fromJSON(usuarioData);

            await UsuarioService.create(usuario);
            return res.status(201).json({ message: "Usuário criado com sucesso" });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

}

export default new UsuarioConstroller();