import { DataSource } from "typeorm";
export const meuDataSource = new DataSource({
    type: "mysql",
    username: "root",
    password: "1234",
    database: "prova",
    port: 3306,
    host: "localhost",
    entities: [],
})