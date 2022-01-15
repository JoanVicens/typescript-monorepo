import { InvalidArgumentError } from "./InvalidArgumentError";
import { PositiveIntValueObject } from "./PositiveIntValueObject";

export class DateValueObject extends PositiveIntValueObject {

    constructor(value: number) {
        super(value);

        this.enseureIsValidDateTime(value);
    }

    enseureIsValidDateTime(timestamp: number): void {
        const isValid = (new Date(timestamp)).getTime() > 0;

        if (!isValid)
            throw new InvalidArgumentError(`${timestamp} is an invalid date`)
    }
}