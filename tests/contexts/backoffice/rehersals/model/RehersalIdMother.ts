import { RehersalId } from "../../../../../src/contexts/backoffice/shared/Rehersals/RehersalId";
import { MotherCreator } from "../../../shared/domain/MotherCreator";

export class RehersalIdMother {

    static create(value: string): RehersalId {
        return new RehersalId(value);
    }

    static random(): RehersalId {
        const randomUuid = MotherCreator.Uuid();

        return RehersalIdMother.create(randomUuid);
    }
}