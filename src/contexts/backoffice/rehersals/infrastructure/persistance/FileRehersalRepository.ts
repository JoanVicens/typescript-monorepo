import fs from 'fs';
import { serialize, deserialize } from 'bson';
import { Rehersal } from "../../domain/Rehersal";
import { RehersalRepository } from "../../domain/RehersalRepository";

export class FileRehersalRepository implements RehersalRepository {

    private readonly FILE_PATH = `${__dirname}/rehersals`;

    private filePath(id: string): string {
        return `${this.FILE_PATH}.${id}.repo`;
    }

    async save(rehersal: Rehersal): Promise<void> {
        fs.promises.writeFile(this.filePath(rehersal.id.value), serialize(rehersal));

    }

    async search(rehersalId: string): Promise<Rehersal> {
        const rehersalData = await fs.promises.readFile(this.filePath(rehersalId));
        const { id, daytime, duration } = deserialize(rehersalData);

        return new Rehersal(id, daytime, duration);
    }

}