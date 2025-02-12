import connectDB from "../config/DataBase";
import { Empresa } from "../types/Empresa";

export class EmpresaModel {

  public async getAll(): Promise<Empresa[]> {
    const db = await connectDB();
    return db.all<Empresa[]>("SELECT * FROM empresas");
  }

  public async getById(id: number): Promise<Empresa | null> {
    const db = await connectDB();
    const empresa = await db.get<Empresa>("SELECT * FROM empresas WHERE id = ?", [id]);
    return empresa || null;
  }

  public async create(empresa: Empresa): Promise<void> {
    const db = await connectDB();
    const atributos = empresa.getAttributes();

    await db.run(
      `INSERT INTO empresas (
        nome, 
        nomeFantasia, 
        cnpk, 
        setor, 
        enderecoSede, 
        nomeResponsavel, 
        contatoResponsavel, 
        emailResponsavel, 
        observacoes, 
        tipo, 
        id_empresa_sede
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        atributos.id,
        atributos.nome,
        atributos.nomeFantasia,
        atributos.cnpj,
        atributos.setor,
        atributos.enderecoSede,
        atributos.nomeResponsavel,
        atributos.contatoResponsavel,
        atributos.emailResponsavel,
        atributos.observacoes,
        atributos.tipo,
        atributos.idEmpresaSede || null
      ]
    );
  }

  public async update(id: number, empresa: Empresa): Promise<void> {
    const db = await connectDB();
    const atributos = empresa.getAttributes();
    await db.run(
      `UPDATE empresas SET
        nome = ?,
        nomeFantasia = ?,
        cnpk = ?,
        setor = ?,
        enderecoSede = ?,
        nomeResponsavel = ?,
        contatoResponsavel = ?,
        emailResponsavel = ?,
        observacoes = ?,
        tipo = ?,
        id_empresa_sede = ?
      WHERE id = ?`,
      [
        atributos.id,
        atributos.nome,
        atributos.nomeFantasia,
        atributos.cnpj,
        atributos.setor,
        atributos.enderecoSede,
        atributos.nomeResponsavel,
        atributos.contatoResponsavel,
        atributos.emailResponsavel,
        atributos.observacoes,
        atributos.tipo,
        atributos.idEmpresaSede || null
      ]
    );
  }

  public async deleteById(id: number): Promise<void> {
    const db = await connectDB();
    await db.run("DELETE FROM empresas WHERE id = ?", [id]);
  }
}

export default new EmpresaModel();