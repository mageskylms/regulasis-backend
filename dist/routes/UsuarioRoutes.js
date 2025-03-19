"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/UsuarioRoutes.ts
const authMiddleware_1 = require("../middlewares/authMiddleware");
const express_1 = require("express");
const UsuarioController_1 = __importDefault(require("../controllers/UsuarioController"));
class UsuarioRoutes {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/usuarios", authMiddleware_1.verifyToken, (0, authMiddleware_1.authorize)(), this.handleRequest(UsuarioController_1.default.getAll));
        this.router.get("/usuarios/:id", authMiddleware_1.verifyToken, (0, authMiddleware_1.authorize)(), this.handleRequest(UsuarioController_1.default.getById));
        this.router.post("/usuarios", authMiddleware_1.verifyToken, (0, authMiddleware_1.authorize)(), this.handleRequest(UsuarioController_1.default.create));
        this.router.put("/usuarios/:id", authMiddleware_1.verifyToken, (0, authMiddleware_1.authorize)(), this.handleRequest(UsuarioController_1.default.update));
        this.router.delete("/usuarios/:id", authMiddleware_1.verifyToken, (0, authMiddleware_1.authorize)(), this.handleRequest(UsuarioController_1.default.delete));
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
exports.default = new UsuarioRoutes().router;
