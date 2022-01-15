import { RehersalId } from "../../shared/Rehersals/RehersalId";
import { RehersalDuration } from "./RehersalDuration";
import { RehersalTimestamp } from "./RehersalTimestamp";

export class Rehersal {

    readonly id: RehersalId;
    readonly timestamp: RehersalTimestamp;
    readonly duration: RehersalDuration;

    constructor({ id, timestamp, duration }: { id: RehersalId, timestamp: RehersalTimestamp, duration: RehersalDuration }) {
        this.id = id;
        this.timestamp = timestamp;
        this.duration = duration;
    }
}   