import bcrypt from 'bcryptjs';
import { Request, Response } from "express";
import UsuarioService from "../services/UsuarioService";
import { Usuario } from "../types/Usuario";
import jwt from "jsonwebtoken";

const SECRET_KEY = "chave_secreta_do_regulasis";

class LoginController {

    // Método de login
    public async login(req: Request, res: Response) {
        const { user, password } = req.body;

        try {

            const usuarioDB = await UsuarioService.getByUser(user);

            if (!usuarioDB) {
                return res.status(400).json({ message: "Credenciais inválidas." });
            }

            const usuario = Usuario.fromJSON(usuarioDB);

            const isPasswordValid = await bcrypt.compare(password, usuario.getPassword());

            if (!isPasswordValid) {
                return res.status(400).json({ message: "Credenciais inválidas." });
            }

            const token = jwt.sign({ userName: usuario.getUser(), role: usuario.getRegra() }, SECRET_KEY, { expiresIn: '4h' });
            return res.status(200).json({ token, userName: usuario.getNome() });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Erro no servidor.", error });
        }
    }

}

export default new LoginController();
