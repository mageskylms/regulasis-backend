import { Router } from "express";
import EmpresaController from "../controllers/EmpresaController";

class EmpresaRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/empresas", this.handleRequest(EmpresaController.getAll));
        this.router.get("/empresas/:id", this.handleRequest(EmpresaController.getById));
        this.router.get("/filiais/:id", this.handleRequest(EmpresaController.getByIdEmpresaSede));
        this.router.post("/empresas", this.handleRequest(EmpresaController.create));
        this.router.put("/empresas/:id", this.handleRequest(EmpresaController.update));
        this.router.delete("/empresas/:id", this.handleRequest(EmpresaController.delete));
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

export default new EmpresaRoutes().router;