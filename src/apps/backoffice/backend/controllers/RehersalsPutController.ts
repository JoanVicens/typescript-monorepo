import { Request, Response } from "express";
import httpStatus from "http-status";
import { RehersalCreator } from "../../../../contexts/backoffice/rehersals/application/RehersalCreator";
import { Controller } from "./Controller";

export class RehersalsPutController implements Controller {

    private readonly rehersalCreator: RehersalCreator;

    constructor(rehersalCreator: RehersalCreator) {
        this.rehersalCreator = rehersalCreator;
    }

    async run(req: Request, res: Response): Promise<void> {

        const { id, daytime, duration } = req.body;

        await this.rehersalCreator.run(id, daytime, duration);

        res.status(httpStatus.CREATED).send();
    }

}