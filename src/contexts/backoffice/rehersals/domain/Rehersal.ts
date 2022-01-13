export class Rehersal {

    readonly id: string;
    readonly daytime: string;
    readonly duration: string;

    constructor(
        id: string,
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