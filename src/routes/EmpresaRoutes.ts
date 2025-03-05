import { Router } from "express";
import EmpresaController from "../controllers/EmpresaController";
import { verifyToken, authorize } from "../middlewares/authMiddleware";

class EmpresaRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/empresas", verifyToken, authorize(),this.handleRequest(EmpresaController.getAll));
        this.router.get("/empresas/:id", verifyToken, authorize(), this.handleRequest(EmpresaController.getById));
        this.router.get("/empresas/:id/filiais", verifyToken, authorize(), this.handleRequest(EmpresaController.getByIdEmpresaSede));
        this.router.post("/empresas", verifyToken, authorize(), this.handleRequest(EmpresaController.create));
        this.router.put("/empresas/:id", verifyToken, authorize(), this.handleRequest(EmpresaController.update));
        this.router.delete("/empresas/:id", verifyToken, authorize(), this.handleRequest(EmpresaController.delete));
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