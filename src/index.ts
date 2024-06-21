import express, { json } from "express"
import { meuDataSource } from "./data-source"

meuDataSource.initialize().then(()=>{
    console.log("iniciou o banco");
    const servidor = express();
    servidor.use(json());
    servidor.listen(3000, ()=>{
        console.log('iniciou o servidor')
})
}).catch(() => {
    console.log("erro no banco");
})