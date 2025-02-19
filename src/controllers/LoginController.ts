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
            // 1. Buscar o usuário no banco
            const usuario = Usuario.fromJSON(await UsuarioService.getByUser(user));

            if (!usuario) {
                return res.status(400).json({ message: "Credenciais inválidas." });
            }

            // 2. Verificar se a senha está correta
            const isPasswordValid = await bcrypt.compare(password, usuario.getPassword());

            if (!isPasswordValid) {
                return res.status(400).json({ message: "Credenciais inválidas." });
            }

            // 3. Gerar o token de autenticação
            const token = jwt.sign({ userId: usuario.getId(), role: usuario.getRegra() }, SECRET_KEY, { expiresIn: '4h' });
            console.log("Token Payload", { userId: usuario.getId(), role: usuario.getRegra() });
            return res.status(200).json({ token });


        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Erro no servidor.", error });
        }
    }

}

export default new LoginController();
