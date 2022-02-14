import { RehersalTimestamp } from "../../../../../src/contexts/backoffice/rehersals/domain/RehersalTimestamp";
import { MotherCreator } from "../../../shared/domain/MotherCreator";

export class RehersalTimestampMother {
    
    static create(value: number): RehersalTimestamp {
        return new RehersalTimestamp(value);
    }

    static random(): RehersalTimestamp {
        const timestamp = MotherCreator.PositiveInterger();

        return RehersalTimestampMother.create(timestamp);
    }

}