import { RehersalId } from "../../../../../../src/contexts/backoffice/shared/Rehersals/RehersalId";

export class RehersalIdMother {
    static create(value: string): RehersalId {
        return new RehersalId(value);
    }

    static createor() {
        return () => this.random();
    }

    static random(): RehersalId {
        return this.create(UuidMother.random());
    }
 }