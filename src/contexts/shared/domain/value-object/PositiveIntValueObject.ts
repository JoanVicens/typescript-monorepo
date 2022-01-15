import { InvalidPositiveInteger } from "./InvalidPositiveInteger";
import { NumberValueObject } from "./NumberValueObject";

export abstract class PositiveIntValueObject extends NumberValueObject {

    constructor(value: number) {
        super(value);

        this.enseureIsValidPositiveIntValue(value);
    }

    enseureIsValidPositiveIntValue(number: number) {
        if(!Number.isInteger(number))
            throw new InvalidPositiveInteger(`<${number}> is not a positive integer>`);
    }

    
}