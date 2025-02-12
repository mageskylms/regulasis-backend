import { open, Database } from 'sqlite';
import * as sqlite3 from 'sqlite3'; // Importar tudo de sqlite3

let db: Database | null = null; // Inicializar como null

async function connectDB(): Promise<Database> {
  if (!db) {
    db = await open({
      filename: "./src/database/regulaSisDB.db",
      driver: sqlite3.Database, // Passar o módulo sqlite3.Database
    });
  }
  return db;
}

export default connectDB;