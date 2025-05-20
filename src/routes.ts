import { Router, Request, Response } from "express";
import User from './controller/user'
const routes = Router();


routes.get("/", (req: Request, res: Response) : any => {
    return res.send('rota de teste');
});

routes.get("/funcionarios", (req : Request, res : Response) : any =>  {
    return res.json({
        items : [
            {
                id: "1",
                nome: "Carlos",
                cargo: "Desenvolvedor",
                idade: 22,
                custoHora: 120,
                temLicenca: false
            },
            {
                id: "2",
                nome: "Andre",
                cargo: "Gerente de Projetos",
                idade: 59,
                custoHora: 220,
                temLicenca: true
            },
            {
                id: "3",
                nome: "Igor",
                cargo: "Analista de Dados",
                idade: 22,
                custoHora: 12,
                temLicenca: true
            },
        ]
    });
});

routes.post("/users", (req: Request, res:Response) : any => UserController.create(res,req))


export default routes;
