// src/middlewares/authMiddleware.ts

import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { permissions } from "../config/permissions";

const SECRET_KEY = "chave_secreta_do_regulasis";

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    console.log("Token recebido:", token); //retirar quando os testes estiverem ok!

    if (!token) {
        return next(new Error("Acesso não autorizado. Token ausente.")); // Chama next com um erro
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;
        req.user = decoded;
        next();
    } catch (error) {
        return next(new Error("Token inválido ou expirado."));
    }
};

export const authorize = () => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const userRole = req.user?.role;
        console.log("User role:", userRole);  // Aqui você verifica o conteúdo de req.user - retirar quando ok!
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

        const routePermissions = permissions[routePath as keyof typeof permissions];

        if (!routePermissions) {
            res.status(403).json({ message: "Acesso negado. Rota não configurada em permissions." });
            return;
        }

        //const allowedRoles = permissions[routePath as keyof typeof permissions];

        const allowedRoles = routePermissions[method as keyof typeof routePermissions];

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


declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload & { role?: string, id?: string };
        }
    }
}