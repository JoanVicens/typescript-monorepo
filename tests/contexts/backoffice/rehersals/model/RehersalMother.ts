import { RehersalCreatorRequest } from "../../../../../src/contexts/backoffice/rehersals/application/RehersalCreatorRequest";
import { Rehersal } from "../../../../../src/contexts/backoffice/rehersals/domain/Rehersal";
import { RehersalDuration } from "../../../../../src/contexts/backoffice/rehersals/domain/RehersalDuration";
import { RehersalTimestamp } from "../../../../../src/contexts/backoffice/rehersals/domain/RehersalTimestamp";
import { RehersalId } from "../../../../../src/contexts/backoffice/shared/Rehersals/RehersalId";
import { RehersalDurationMother } from "./RehersalDurationMother";
import { RehersalIdMother } from "./RehersalIdMother";
import { RehersalTimestampMother } from "./RehersalTimestampMother";

export class RehersalMother {

    static create(id: RehersalId, timestamp: RehersalTimestamp, duration: RehersalDuration): Rehersal {
        return new Rehersal({id, timestamp, duration});
    }

    static random(): Rehersal {
        return RehersalMother.create(
            RehersalIdMother.random(),
            RehersalTimestampMother.random(),
            RehersalDurationMother.random()
        );
    }

    static fromRequest(request: RehersalCreatorRequest) {
        return RehersalMother.create(
            new RehersalId(request.id),
            new RehersalTimestamp(request.timestamp),
            new RehersalDuration(request.duration)
        );
    }
}