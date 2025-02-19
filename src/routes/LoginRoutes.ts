import LoginController from '../controllers/LoginController';
import { verifyToken } from '../middlewares/authMiddleware';
import { Router, Request, Response } from "express";

class LoginRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post("/login", this.handleRequest(LoginController.login));
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

export default new LoginRoutes().router;