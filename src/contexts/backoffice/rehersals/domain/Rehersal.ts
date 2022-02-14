import { AggregateRoot } from "../../../shared/domain/value-object/AggregateRoot";
import { RehersalId } from "../../shared/Rehersals/RehersalId";
import { RehersalDuration } from "./RehersalDuration";
import { RehersalTimestamp } from "./RehersalTimestamp";

export class Rehersal extends AggregateRoot {

    readonly id: RehersalId;
    readonly timestamp: RehersalTimestamp;
    readonly duration: RehersalDuration;

    constructor({ id, timestamp, duration }: { id: RehersalId, timestamp: RehersalTimestamp, duration: RehersalDuration }) {
        super();
        this.id = id;
        this.timestamp = timestamp;
        this.duration = duration;
    }

    public toPrimitives() {
        return {
            id: this.id.value,
            timestamp: this.timestamp.value,
            duration: this.duration.value
        }
    }
}   