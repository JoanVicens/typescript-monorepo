import { Rehersal } from "../../../../../../src/contexts/backoffice/rehersals/domain/Rehersal";
import { FileRehersalRepository } from "../../../../../../src/contexts/backoffice/rehersals/infrastructure/persistance/FileRehersalRepository";
import { RehersalTimestamp } from "../../../../../../src/contexts/backoffice/rehersals/domain/RehersalTimestamp";
import { RehersalDuration } from "../../../../../../src/contexts/backoffice/rehersals/domain/RehersalDuration";
import { RehersalId } from "../../../../../../src/contexts/backoffice/shared/Rehersals/RehersalId";

describe('FileRehersalRepository', () => {
    it('should save a rehersal', async () => {
        const expectedRehersal = new Rehersal({ 
            id: new RehersalId("1ff50f07-cc09-4094-aae6-2b1a63c8f8ae"),
            timestamp: new RehersalTimestamp(1642204271),
            duration: new RehersalDuration(2)
        });

        const SUT = new FileRehersalRepository();

        await SUT.save(expectedRehersal);

        const rehersal = await SUT.search('1ff50f07-cc09-4094-aae6-2b1a63c8f8ae');
        expect(rehersal).toEqual(expectedRehersal);

    });
});