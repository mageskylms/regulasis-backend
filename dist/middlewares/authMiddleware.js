"use strict";
// src/middlewares/authMiddleware.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const permissions_1 = require("../config/permissions");
const SECRET_KEY = "chave_secreta_do_regulasis";
const verifyToken = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    console.log("Token recebido:", token); //retirar quando os testes estiverem ok!
    if (!token) {
        return next(new Error("Acesso não autorizado. Token ausente.")); // Chama next com um erro
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    }
    catch (error) {
        return next(new Error("Token inválido ou expirado."));
    }
};
exports.verifyToken = verifyToken;
const authorize = () => {
    return (req, res, next) => {
        const userRole = req.user?.role;
        console.log("User role:", userRole); // Aqui você verifica o conteúdo de req.user - retirar quando ok!
        const routePath = req.route.path;
        const method = req.method;
        if (!userRole) {
            // Envia uma resposta de erro sem retornar nada explicitamente - tirar quando ok!
            res.status(403).json({ message: "Papel do usuário não definido." });
            return; // Fazemos um return aqui, mas não estamos retornando nada para o TypeScript - tirar quando ok
        }
        // // Verificando se a rota está configurada em `permissions` - tirar quando ok
        // if (!(routePath in permissions)) {
        //     res.status(403).json({ message: "Acesso negado. Rota não configurada em permissions." });
        //     return; // Retorna sem devolver nada - tirar quando ok
        // }
        const routePermissions = permissions_1.permissions[routePath];
        if (!routePermissions) {
            res.status(403).json({ message: "Acesso negado. Rota não configurada em permissions." });
            return;
        }
        //const allowedRoles = permissions[routePath as keyof typeof permissions];
        const allowedRoles = routePermissions[method];
        if (!allowedRoles) {
            res.status(403).json({ message: "Método não permitido para essa rota" });
            return;
        }
        if (!allowedRoles.includes(userRole)) {
            res.status(403).json({ message: "Acesso negado. Permissão insuficiente." });
            return; // Retorna sem devolver nada
        }
        // Se tudo certo, chama next() sem retornar nada, apenas passando o controle
        next(); // Apenas chama next(), sem retornar nada para o TypeScript
    };
};
exports.authorize = authorize;
