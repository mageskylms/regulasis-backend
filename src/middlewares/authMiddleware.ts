// src/middlewares/authMiddleware.ts

import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

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

declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload;
        }
    }
}