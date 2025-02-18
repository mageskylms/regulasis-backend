import connectDB from "../config/DataBase";
import { Empresa } from "../types/Empresa";

export class EmpresaModel {

  // Método para obter todas as empresas
  public async getAll(): Promise<Empresa[]> {
    const db = await connectDB();
    return db.all<Empresa[]>("SELECT * FROM empresas");
  }

  public async getByIdEmpresaSede(id: number): Promise<Empresa[]> {
    const db = await connectDB();
    return db.all<Empresa[]>("SELECT * FROM empresas WHERE id_empresa_sede = ?", [id]);
  }

  // Método para obter uma empresa por ID
  public async getById(id: number): Promise<Empresa | null> {
    const db = await connectDB();
    const empresa = await db.get<Empresa>("SELECT * FROM empresas WHERE id = ?", [id]);
    return empresa || null;
  }

  // Método para criar uma nova empresa
  public async create(empresa: Empresa): Promise<void> {
    const db = await connectDB();

    await db.run(
      `INSERT INTO empresas (
        nome, 
        nome_fantasia, 
        cnpj, 
        setor, 
        endereco_sede, 
        nome_responsavel, 
        contato_responsavel, 
        email_responsavel, 
        observacoes, 
        tipo, 
        id_empresa_sede
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        empresa.getNome(),
        empresa.getNomeFantasia(),
        empresa.getCnpj(),
        empresa.getSetor(),
        empresa.getEnderecoSede(),
        empresa.getNomeResponsavel(),
        empresa.getContatoResponsavel(),
        empresa.getEmailResponsavel(),
        empresa.getObservacoes(),
        empresa.getTipo(),
        empresa.getIdEmpresaSede() || null
      ]
    );
  }

  // Método para atualizar uma empresa
  public async update(id: number, empresa: Empresa): Promise<void> {
    const db = await connectDB();

    await db.run(
      `UPDATE empresas SET
        nome = ?,
        nome_fantasia = ?,
        cnpj = ?,
        setor = ?,
        endereco_sede = ?,
        nome_responsavel = ?,
        contato_responsavel = ?,
        email_responsavel = ?,
        observacoes = ?,
        tipo = ?,
        id_empresa_sede = ?
        WHERE id = ?`,
      [
        empresa.getNome(),
        empresa.getNomeFantasia(),
        empresa.getCnpj(),
        empresa.getSetor(),
        empresa.getEnderecoSede(),
        empresa.getNomeResponsavel(),
        empresa.getContatoResponsavel(),
        empresa.getEmailResponsavel(),
        empresa.getObservacoes(),
        empresa.getTipo(),
        empresa.getIdEmpresaSede() || null,
        empresa.getId()
      ]
    );
  }

  // Método para deletar uma empresa por ID
  public async deleteById(id: number): Promise<void> {
    const db = await connectDB();
    await db.run("DELETE FROM empresas WHERE id = ?", [id]);
  }
}

// Exportando uma instância do modelo para uso
export default new EmpresaModel();