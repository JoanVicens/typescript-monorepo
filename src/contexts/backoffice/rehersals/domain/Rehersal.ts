import { Uuid } from "../../../shared/domain/value-object/Uuid";

export class Rehersal {

    readonly id: Uuid;
    readonly daytime: string;
    readonly duration: string;

    constructor(
        id: Uuid,
        daytime: string,
        duration: string) {

        this.id = id;
        this.daytime = daytime;
        this.duration = duration;
    }

    doSomething() {
        return this.id + this.daytime + this.duration;
    }
}   