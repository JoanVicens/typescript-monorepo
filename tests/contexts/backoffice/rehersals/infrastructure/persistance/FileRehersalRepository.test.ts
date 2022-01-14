import { Uuid } from "../../../../../../src/contexts/shared/domain/value-object/Uuid";
import { Rehersal } from "../../../../../../src/contexts/backoffice/rehersals/domain/Rehersal";
import { FileRehersalRepository } from "../../../../../../src/contexts/backoffice/rehersals/infrastructure/persistance/FileRehersalRepository";

describe('FileRehersalRepository', () => {
    it('should save a rehersal', async () => {
        const expectedRehersal = new Rehersal(new Uuid("3c560334-df73-4494-a2c9-f79af36c3f43"), "daytime", "duration");

        const SUT = new FileRehersalRepository();

        await SUT.save(expectedRehersal);

        const rehersal = await SUT.search('3c560334-df73-4494-a2c9-f79af36c3f43');
        expect(rehersal).toEqual(expectedRehersal);

    });
});