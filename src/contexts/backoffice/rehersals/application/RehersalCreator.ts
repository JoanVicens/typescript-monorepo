import { Rehersal } from "../domain/Rehersal";
import { RehersalRepository } from "../domain/RehersalRepository";
import { RehersalCreatorRequest } from "./RehersalCreatorRequest";

export class RehersalCreator {

    private readonly repository: RehersalRepository;

    constructor(repository: RehersalRepository) {
        this.repository = repository;
    }

    async run(request: RehersalCreatorRequest) {
        const rehersal = new Rehersal(
            request.id, 
            request.daytime,
            request.duration
        );

        return this.repository.save(rehersal);
    }
}