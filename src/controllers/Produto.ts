import { ProdutoService } from "../services/Produto";
import { Produto } from "../models/Produto";
import { Request, Response } from "express";

    export class ProdutoController {
        private service: ProdutoService;


        constructor(s: ProdutoService) {
            this.service = s;
        }
        get = async (req: Request, res: Response) => {
             const produtos = await service.pegarTodos();
             return res.status(200).json(produtos)
        }

        post = async (req: Request, res: Response) => {
            const {nome, descrição, imagem} = req.body
            nome as Partial<Produto>
            const produto = await this.service.criarProduto(nome);
            return res.status(201).json(produto);
       }
    }

    const service = new ProdutoService();
    const controller = new ProdutoController(service);