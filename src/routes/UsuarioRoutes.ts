// src/routes/UsuarioRoutes.ts
import { verifyToken } from '../middlewares/authMiddleware';
import { Router, Request, Response } from "express";
import UsuarioController from "../controllers/UsuarioController";

class UsuarioRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/usuarios", verifyToken, this.handleRequest(UsuarioController.getAll));
        this.router.get("/usuarios/:id", verifyToken, this.handleRequest(UsuarioController.getById));
        this.router.get("/usuarios/user/:user", verifyToken, this.handleRequest(UsuarioController.getByUser));
        this.router.get("/usuarios/regra/:regra", verifyToken, this.handleRequest(UsuarioController.getByRegra));
        this.router.post("/usuarios", verifyToken, this.handleRequest(UsuarioController.create));
        this.router.put("/usuarios", verifyToken, this.handleRequest(UsuarioController.update));
        this.router.delete("/usuarios/:id", verifyToken, this.handleRequest(UsuarioController.delete));
    }

    private handleRequest(controllerMethod: Function) {
        return async (req: Request, res: Response) => {
            try {
                await controllerMethod(req, res);
            } catch (error: any) {
                res.status(500).json({ error: error.message });
            }
        };
    }
}

export default new UsuarioRoutes().router;