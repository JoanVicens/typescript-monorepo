import { RehersalCreatorRequest } from "../../../../../src/contexts/backoffice/rehersals/application/RehersalCreatorRequest";
import { RehersalDurationMother } from "../model/RehersalDurationMother";
import { RehersalIdMother } from "../model/RehersalIdMother";
import { RehersalTimestampMother } from "../model/RehersalTimestampMother";

export class CreateReheresalRequestMother {
    static create(id: string, timestamp: number, duration: number): RehersalCreatorRequest {
        return { 
            id: id,
            timestamp: timestamp,
            duration: duration
        };
    }

    static random(): RehersalCreatorRequest {
        return CreateReheresalRequestMother.create(
            RehersalIdMother.random().value,
            RehersalTimestampMother.random().value,
            RehersalDurationMother.random().value
        );
    }

}