
export abstract class NumberValueObject {

    readonly value: number;

    constructor(value: number) {
        this.value = value;
    }

    equals(other: NumberValueObject): boolean {
        return this.value === other.value;
    }

    isBiggerThean(other: NumberValueObject): boolean {
        return this.value > other.value;
    }
}