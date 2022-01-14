import { Request, Response } from "express";
import httpStatus from "http-status";
import { RehersalCreator } from "../../../../contexts/backoffice/rehersals/application/RehersalCreator";
import { Controller } from "./Controller";

type RehersalPutRequest = Request & {
    body: {
        id: string;
        daytime: string;
        duration: string;
    }
}


export class RehersalsPutController implements Controller {

    private readonly rehersalCreator: RehersalCreator;

    constructor(rehersalCreator: RehersalCreator) {
        this.rehersalCreator = rehersalCreator;
    }

    async run(req: RehersalPutRequest, res: Response): Promise<void> {

        const { id, daytime, duration } = req.body;

        await this.rehersalCreator.run({ id, daytime, duration });

        res.status(httpStatus.CREATED).send();
    }

}