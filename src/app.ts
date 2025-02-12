import express, { Application, Request, Response } from 'express';
import cors from 'cors'; // Importando as rotas da empresa
import EmpresaRoutes from './routes/EmpresaRoutes';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json()); // Para conseguir ler o corpo das requisições em JSON
  }

  private routes(): void {
    // Rota de health check
    this.app.get('/api/health', (req: Request, res: Response) => {
      res.json({ status: 'API funcionando!' });
    });

    // Registrando as rotas da empresa
    this.app.use('/api', EmpresaRoutes); // A base das rotas será /api (por exemplo, /api/empresas)
  }
}

const appInstance = new App();
appInstance.app.listen(3000, () => console.log('Servidor rodando na porta 3000'));