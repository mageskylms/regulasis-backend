"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const EmpresaRoutes_1 = __importDefault(require("./routes/EmpresaRoutes"));
const ProcessoRoutes_1 = __importDefault(require("./routes/ProcessoRoutes"));
const UsuarioRoutes_1 = __importDefault(require("./routes/UsuarioRoutes"));
const LoginRoutes_1 = __importDefault(require("./routes/LoginRoutes"));
class App {
    app;
    constructor() {
        this.app = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.get('/api/', (req, res) => {
            res.json({ status: 'API funcionando!' });
        });
        this.app.use('/api', EmpresaRoutes_1.default);
        this.app.use('/api', ProcessoRoutes_1.default);
        this.app.use('/api', UsuarioRoutes_1.default);
        this.app.use('/api', LoginRoutes_1.default);
        this.app.use((err, req, res, next) => {
            console.error(err.stack); // Log do erro
            res.status(401).json({ message: err.message });
        });
    }
}
const appInstance = new App();
appInstance.app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
