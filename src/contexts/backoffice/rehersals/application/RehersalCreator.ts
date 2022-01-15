import { Uuid } from "../../../shared/domain/value-object/Uuid";
import { Rehersal } from "../domain/Rehersal";
import { RehersalDuration } from "../domain/RehersalDuration";
import { RehersalRepository } from "../domain/RehersalRepository";
import { RehersalTimestamp } from "../domain/RehersalTimestamp";
import { RehersalCreatorRequest } from "./RehersalCreatorRequest";

export class RehersalCreator {

    private readonly repository: RehersalRepository;

    constructor(repository: RehersalRepository) {
        this.repository = repository;
    }

    async run(request: RehersalCreatorRequest) {
        const rehersal = new Rehersal({
            id: new Uuid(request.id),
            timestamp: new RehersalTimestamp(request.timestamp),
            duration: new RehersalDuration(request.duration)
        });

        return this.repository.save(rehersal);
    }
}