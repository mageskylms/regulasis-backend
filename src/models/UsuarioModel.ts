import connectDB from "../config/DataBase";
import { Usuario } from "../types/Usuario";

export class UsuarioModel {
    private inserTo: string = "INSERT INTO usuarios(nome, contato, regra, email, password) VALUES (?,?,?,?,?)";
    private updateSet: string = "UPDATE usuarios SET nome = ?, contato = ? , regra = ?, email = ?, password = ? WHERE id = ?";
    private selectEmail: string = "SELECT * FROM usuarios WHERE email = ?";
    private selectRegra: string = "SELECT * FROM usuarios WHERE regra = ?";
    private selectAll: string = "SELECT * FROM usuarios";
    private selectId: string = "SELECT * FROM usuarios WHERE id= ?";
    private delete: string = "DELETE FROM usuarios WHERE id = ?";

    public async getAll(): Promise<Usuario[]> {
        const db = await connectDB();
        return db.all<Usuario[]>(this.selectAll);
    }

    public async getByEmail(email: string): Promise<Usuario> {
        const db = await connectDB();
        return db.all<Usuario>(this.selectEmail, [email]);
    }

    public async getByRegra(regra: string): Promise<Usuario[]> {
        const db = await connectDB();
        return db.all<Usuario[]>(this.selectRegra, [regra]);
    }

    public async getById(id: number): Promise<Usuario | null> {
        const db = await connectDB();
        const usuario = await db.get<Usuario>(this.selectId, [id]);
        return usuario || null;
    }

    public async deleteById(id: number): Promise<void> {
        const db = await connectDB();
        await db.run(this.delete, [id]);
    }

    public async create(usuario: Usuario): Promise<void> {
        const db = await connectDB();

        await db.run(this.inserTo,
            [
                usuario.getNome(),
                usuario.getContato(),
                usuario.getRegra(),
                usuario.getEmail(),
                usuario.getPassword()
            ]
        );
    }

    public async update(id: number, usuario: Usuario): Promise<void> {
        const db = await connectDB();

        await db.run(this.updateSet,
            [
                usuario.getNome(),
                usuario.getContato(),
                usuario.getRegra(),
                usuario.getEmail(),
                usuario.getPassword()
            ]
        );
    }

}

export default new UsuarioModel();
