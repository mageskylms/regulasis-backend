"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EmpresaController_1 = __importDefault(require("../controllers/EmpresaController"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
class EmpresaRoutes {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/empresas", authMiddleware_1.verifyToken, (0, authMiddleware_1.authorize)(), this.handleRequest(EmpresaController_1.default.getAll));
        this.router.get("/empresas/:id", authMiddleware_1.verifyToken, (0, authMiddleware_1.authorize)(), this.handleRequest(EmpresaController_1.default.getById));
        this.router.get("/empresas/:id/filiais", authMiddleware_1.verifyToken, (0, authMiddleware_1.authorize)(), this.handleRequest(EmpresaController_1.default.getByIdEmpresaSede));
        this.router.post("/empresas", authMiddleware_1.verifyToken, (0, authMiddleware_1.authorize)(), this.handleRequest(EmpresaController_1.default.create));
        this.router.put("/empresas/:id", authMiddleware_1.verifyToken, (0, authMiddleware_1.authorize)(), this.handleRequest(EmpresaController_1.default.update));
        this.router.delete("/empresas/:id", authMiddleware_1.verifyToken, (0, authMiddleware_1.authorize)(), this.handleRequest(EmpresaController_1.default.delete));
    }
    handleRequest(controllerMethod) {
        return async (req, res) => {
            try {
                await controllerMethod(req, res);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        };
    }
}
exports.default = new EmpresaRoutes().router;
