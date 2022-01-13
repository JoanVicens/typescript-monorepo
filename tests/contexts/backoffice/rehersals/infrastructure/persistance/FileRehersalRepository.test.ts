import { Rehersal } from "../../../../../../src/contexts/backoffice/rehersals/domain/Rehersal";
import { FileRehersalRepository } from "../../../../../../src/contexts/backoffice/rehersals/infrastructure/persistance/FileRehersalRepository";

describe('FileRehersalRepository', () => {
    it('should save a rehersal', async () => {
        const expectedRehersal = new  Rehersal("id", "daytime", "duration");

        const SUT = new FileRehersalRepository();

        await SUT.save(expectedRehersal);

        const rehersal = await SUT.search('id');
        expect(rehersal).toEqual(expectedRehersal);

    });
});