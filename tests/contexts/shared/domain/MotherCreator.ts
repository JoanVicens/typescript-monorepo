import { Chance } from 'chance';


export class MotherCreator {

    private static random = new Chance();

    static Uuid(): string {
        return this.random.guid();
    }

    static PositiveInterger(max?: number): number {
        return this.random.integer({ min: 1, max })
    }
}