"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoginController_1 = __importDefault(require("../controllers/LoginController"));
const express_1 = require("express");
class LoginRoutes {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/login", this.handleRequest(LoginController_1.default.login));
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
exports.default = new LoginRoutes().router;
