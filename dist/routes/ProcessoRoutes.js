"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProcessoController_1 = __importDefault(require("../controllers/ProcessoController"));
class ProcessoRoutes {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/processos", this.handleRequest(ProcessoController_1.default.getAll));
        this.router.get("/processos/:id", this.handleRequest(ProcessoController_1.default.getById));
        this.router.get("/processos/empresa/:id", this.handleRequest(ProcessoController_1.default.getByIdEmpresa));
        this.router.get("/processos/usuario/:id", this.handleRequest(ProcessoController_1.default.getByIdUsuario));
        this.router.post("/processos", this.handleRequest(ProcessoController_1.default.create));
        this.router.put("/processos/:id", this.handleRequest(ProcessoController_1.default.update));
        this.router.delete("/processos/:id", this.handleRequest(ProcessoController_1.default.delete));
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
exports.default = new ProcessoRoutes().router;
