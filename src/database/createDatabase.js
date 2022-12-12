import sqlite3 from "sqlite3";
import path from "path";
const caminhoArq = path.resolve("./src/database/","database.db");

const db = new sqlite3.Database(caminhoArq);

//abilitar chaves estrangeiras
const pragma = `PRAGMA foreign_keys = ON`;

function enableForeignKey() {
  db.run(pragma, (error) => {
    if (error) console.log("Error in process of creation exec 'pragma'");
  });
};

//==== Usuários
const USERS_SCHEMA = `
CREATE TABLE users (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(80),
    email VARCHAR(80),
    password VARCHAR(100)
)`;

function CreateTableUser() {
  db.run(USERS_SCHEMA, (error) => {
    if (error) console.log("Error in process of creation table 'USERS'");
  });
};

db.serialize(() => {
  enableForeignKey();
  CreateTableUser();
});