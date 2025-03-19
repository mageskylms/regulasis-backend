"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UsuarioService_1 = __importDefault(require("../services/UsuarioService"));
const Usuario_1 = require("../types/Usuario");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = "chave_secreta_do_regulasis";
class LoginController {
    // Método de login
    async login(req, res) {
        const { user, password } = req.body;
        try {
            const usuarioDB = await UsuarioService_1.default.getByUser(user);
            if (!usuarioDB) {
                return res.status(400).json({ message: "Credenciais inválidas." });
            }
            const usuario = Usuario_1.Usuario.fromJSON(usuarioDB);
            const isPasswordValid = await bcryptjs_1.default.compare(password, usuario.getPassword());
            if (!isPasswordValid) {
                return res.status(400).json({ message: "Credenciais inválidas." });
            }
            const token = jsonwebtoken_1.default.sign({ userName: usuario.getUser(), role: usuario.getRegra() }, SECRET_KEY, { expiresIn: '4h' });
            return res.status(200).json({ token, userName: usuario.getNome() });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Erro no servidor.", error });
        }
    }
}
exports.default = new LoginController();
