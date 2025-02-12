import { Request, Response } from "express";
import EmpresaService from "../services/EmpresaService";
import { Empresa } from "../types/Empresa";

class EmpresaController {
    
    public async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const empresas = await EmpresaService.getAll();
            return res.status(200).json(empresas);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    public async getById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const empresa = await EmpresaService.getById(Number(id));
            
            if (!empresa) {
                return res.status(404).json({ message: "Empresa não encontrada" });
            }
            
            return res.status(200).json(empresa);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    public async create(req: Request, res: Response): Promise<Response> {
        try {
            
            const empresaData = req.body;
            const empresa = Empresa.fromJSON(empresaData);
    
            await EmpresaService.createEmpresa(empresa);
            return res.status(201).json({ message: "Empresa criada com sucesso" });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const empresa: Empresa = req.body;
            await EmpresaService.update(Number(id), empresa);
            return res.status(200).json({ message: "Empresa atualizada com sucesso" });
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            await EmpresaService.deleteById(Number(id));
            return res.status(200).json({ message: "Empresa excluída com sucesso" });
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new EmpresaController();