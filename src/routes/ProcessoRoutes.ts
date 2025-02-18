import { Router } from "express";
import ProcessoController from "../controllers/ProcessoController";

class ProcessoRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/processos", this.handleRequest(ProcessoController.getAll));
        this.router.get("/processos/:id", this.handleRequest(ProcessoController.getById));
        this.router.get("/processos/empresa/:id", this.handleRequest(ProcessoController.getByIdEmpresa));
        this.router.get("/processos/usuario/:id", this.handleRequest(ProcessoController.getByIdUsuario));
        this.router.post("/processos", this.handleRequest(ProcessoController.create));
        this.router.put("/processos/:id", this.handleRequest(ProcessoController.update));
        this.router.delete("/processos/:id", this.handleRequest(ProcessoController.delete));
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

export default new ProcessoRoutes().router;