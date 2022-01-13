import { Request, Response, Router } from "express";
import { RehersalsPutController } from "../controllers/RehersalsPutController";
import container from "../dependency-injection";

export const register = (router: Router) => {
    const controller: RehersalsPutController = container.get('Apps.Backoffice.Backend.controllers.RehersalsPutController');
    
    router.put('/rehersals/:id', (req: Request, res: Response) => controller.run(req, res));
}