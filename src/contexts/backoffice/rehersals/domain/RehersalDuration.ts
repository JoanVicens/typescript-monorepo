import { InvalidArgumentError } from "../../../shared/domain/value-object/InvalidArgumentError";
import { PositiveIntValueObject } from "../../../shared/domain/value-object/PositiveIntValueObject";

export class RehersalDuration extends PositiveIntValueObject {

    private readonly MAX_DURATION = 6;

    constructor(value: number) {
        super(value)

        this.ensureIsValidDuration(value);
    }

    ensureIsValidDuration(duration: number) {
        if (duration > this.MAX_DURATION)
            throw new InvalidArgumentError('Maximum rehersal duration exceded');

    }

}