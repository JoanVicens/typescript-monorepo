import { RehersalDuration } from "../../../../../src/contexts/backoffice/rehersals/domain/RehersalDuration";
import { MotherCreator } from "../../../shared/domain/MotherCreator";

export class RehersalDurationMother {

    static create(value: number): RehersalDuration {
        return new RehersalDuration(value);
    }

    static random(): RehersalDuration {
        const duration = MotherCreator.PositiveInterger(6);

        return RehersalDurationMother.create(duration);
    }
}