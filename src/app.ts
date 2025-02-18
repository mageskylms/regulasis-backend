import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import EmpresaRoutes from './routes/EmpresaRoutes';
import ProcessoRoutes from './routes/ProcessoRoutes';
import UsuarioRoutes from './routes/UsuarioRoutes';

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

    this.app.get('/api/', (req: Request, res: Response) => {
      res.json({ status: 'API funcionando!' });
    });

    this.app.use('/api', EmpresaRoutes); 
    this.app.use('/api', ProcessoRoutes); 
    this.app.use('/api', UsuarioRoutes); 
  }
}

const appInstance = new App();
appInstance.app.listen(3000, () => console.log('Servidor rodando na porta 3000'));