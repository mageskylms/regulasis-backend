// src/middlewares/authMiddleware.ts

import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { permissions } from "../config/permissions";

const SECRET_KEY = "chave_secreta_do_regulasis";

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    console.log("Token recebido:", token);

    if (!token) {
        return next(new Error("Acesso não autorizado. Token ausente.")); // Chama next com um erro
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;
        req.user = decoded;
        next(); // Chama next para prosseguir
    } catch (error) {
        return next(new Error("Token inválido ou expirado.")); // Chama next com um erro
    }
};

export const authorize = () => {
    return (req: Request, res: Response, next: NextFunction): void => {
        console.log("User role:", req.user?.role);  // Aqui você verifica o conteúdo de req.user
        const userRole = req.user?.role;
        const routePath = req.route.path;

        if (!userRole) {
            // Envia uma resposta de erro sem retornar nada explicitamente
            res.status(403).json({ message: "Papel do usuário não definido." });
            return; // Fazemos um return aqui, mas não estamos retornando nada para o TypeScript
        }

        // Verificando se a rota está configurada em `permissions`
        if (!(routePath in permissions)) {
            res.status(403).json({ message: "Acesso negado. Rota não configurada em permissions." });
            return; // Retorna sem devolver nada
        }

        const allowedRoles = permissions[routePath as keyof typeof permissions];

        if (!allowedRoles.includes(userRole)) {
            res.status(403).json({ message: "Acesso negado. Permissão insuficiente." });
            return; // Retorna sem devolver nada
        }

        // Se tudo certo, chama next() sem retornar nada, apenas passando o controle
        next(); // Apenas chama next(), sem retornar nada para o TypeScript
    };
};


declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload & { role?: string, id?: string };
        }
    }
}