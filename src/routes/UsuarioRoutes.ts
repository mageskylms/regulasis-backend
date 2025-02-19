// src/routes/UsuarioRoutes.ts
import { verifyToken, authorize } from '../middlewares/authMiddleware';
import { Router, Request, Response } from "express";
import UsuarioController from "../controllers/UsuarioController";

class UsuarioRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/usuarios", verifyToken, authorize(), this.handleRequest(UsuarioController.getAll));
        this.router.get("/usuarios/:id", verifyToken, authorize(),this.handleRequest(UsuarioController.getById));
        this.router.get("/usuarios/user/:user", verifyToken, authorize(), this.handleRequest(UsuarioController.getByUser));
        this.router.get("/usuarios/regra/:regra", verifyToken, authorize(), this.handleRequest(UsuarioController.getByRegra));
        this.router.post("/usuarios", verifyToken, authorize(), this.handleRequest(UsuarioController.create));
        this.router.put("/usuarios", verifyToken, authorize(), this.handleRequest(UsuarioController.update));
        this.router.delete("/usuarios/:id", verifyToken, authorize(), this.handleRequest(UsuarioController.delete));
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