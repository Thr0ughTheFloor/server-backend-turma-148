import { Router, Request, Response } from "express";
import userController from './controller/user'

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

routes.get("/withImages", (req: Request, res: Response) : any => {
    return res.json({
        items: [
            {
                id: "1",
                nome: "Campo",
                imagem: "https://media.istockphoto.com/id/517188688/pt/foto/paisagem-de-montanha.jpg?s=612x612&w=0&k=20&c=uFGUrUT6gA8FrTWhE10YYzngWPlDLssKxJiDs1Qw2Qs="
            },
            {
                id: "2",
                nome: "Montanha",
                imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UqN7bxmvCnQA84Smi_bMlgqKMYmbE7TzYA&s"
            },
            {
                id: "3",
                nome: "Praia",
                imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDrFQr1LLEHhOgdCd0FroVH6zFJe8sJ-nHSg&s"
            }
        ]
    })
})


routes.post("/users", (req: Request, res: Response): any => userController.create(req, res));
routes.get("/users", (req: Request, res: Response): any => userController.read(req, res));
routes.put("/users/:id", (req: Request, res: Response) : any => userController.update(req,res));
routes.delete("/users/:id", (req: Request, res: Response) : any => userController.delete(req,res));
routes.post("/login", (req: Request, res: Response) : any => userController.login(req,res));




export default routes;
