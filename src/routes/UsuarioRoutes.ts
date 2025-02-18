import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";

class UsuarioRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }


    private initializeRoutes() {
        this.router.get("/usuarios", this.handleRequest(UsuarioController.getAll));
        this.router.get("/usuarios/:id", this.handleRequest(UsuarioController.getById));
        this.router.get("/usuarios/email/:email", this.handleRequest(UsuarioController.getByEmail));
        this.router.get("/usuarios/regra/:regra", this.handleRequest(UsuarioController.getByRegra));
        this.router.post("/usuarios/:id", this.handleRequest(UsuarioController.create));
        this.router.put("/usuarios", this.handleRequest(UsuarioController.update));
        this.router.delete("/usuarios/:id", this.handleRequest(UsuarioController.delete));
    }

    private handleRequest(controllerMethod: Function) {
        return async (req: any, res: any) => {
            try {
                await controllerMethod(req, res);
            } catch (error: any) {
                res.status(500).json({ error: error.message });
            }
        };
    }
}

export default new UsuarioRoutes().router;