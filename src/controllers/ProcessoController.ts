import { Request, Response } from "express";
import { Processo } from "../types/Processo";
import ProcessoService from "../services/ProcessoService";

class ProcessoController {

    public async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const processos = await ProcessoService.getAll();
            return res.status(200).json(processos);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    public async getByIdEmpresa(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const processos = await ProcessoService.getByIdEmpresa(Number(id));

            if (!processos || processos.length === 0) {
                return res.status(404).json({ message: "Nenhum processo encontrado para essa empresa" });
            }

            return res.status(200).json(processos);  // Retorna o array de empresas
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    public async getByIdUsuario(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const processos = await ProcessoService.getByIdEmpresa(Number(id));

            if (!processos || processos.length === 0) {
                return res.status(404).json({ message: "Nenhum processo encontrado para esse usuário." });
            }

            return res.status(200).json(processos);  // Retorna o array de empresas
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    public async getById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const processo = await ProcessoService.getById(Number(id));

            if (!processo) {
                return res.status(404).json({ message: "Processo não encontrado" });
            }

            return res.status(200).json({ message: "Emp" });
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            await ProcessoService.deleteById(Number(id));
            return res.status(200).json({ message: "Processo excluído com sucesso" });
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const processo: Processo = req.body;
            await ProcessoService.update(Number(id), processo);
            return res.status(200).json({ message: "Processo atualizado com sucesso" });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    public async create(req: Request, res: Response): Promise<Response> {
        try {

            const processoData = req.body;
            const processo = Processo.fromJSON(processoData);

            await ProcessoService.create(processo);
            return res.status(201).json({ message: "Processo criada com sucesso" });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export default new ProcessoController();