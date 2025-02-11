import { Router, Request, Response } from 'express';

export class ProcessController {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.get('/', this.getAllProcesses);
  }

  private getAllProcesses(req: Request, res: Response): void {
    res.json({ processes: [] });
  }
}
