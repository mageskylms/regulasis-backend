import { open, Database } from "sqlite";
import sqlite3 from "sqlite3";

let db: Database;

async function connectDB(): Promise<Database> {
  if (!db) {
    db = await open({
      filename: "./src/database/regulaSisDB.db", 
      driver: sqlite3.Database,
    });
  }
  return db;
}

export default connectDB;