import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProcessController } from './controllers/processController';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.get('/api/health', (req: Request, res: Response) => {
      res.json({ status: 'API funcionando!' });
    });

    const processController = new ProcessController();
    this.app.use('/api/processes', processController.router);
  }
}

const appInstance = new App();
appInstance.app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
