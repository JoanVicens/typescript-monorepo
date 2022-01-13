import { Rehersal } from "../domain/Rehersal";
import { RehersalRepository } from "../domain/RehersalRepository";

export class RehersalCreator {
    constructor(private repository: RehersalRepository) {}

    async run(id: string, daytime: string, duration: string) {
        const rehersal = new Rehersal(id, daytime, duration);

        return this.repository.save(rehersal);
    }
}