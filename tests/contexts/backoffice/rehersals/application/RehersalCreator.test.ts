import { RehersalCreator } from '../../../../../src/contexts/backoffice/rehersals/application/RehersalCreator';
import { Rehersal } from '../../../../../src/contexts/backoffice/rehersals/domain/Rehersal';
import { RehersalRepositoryMock } from "../__mocks__/RehersalRepositoryMock";
import { Uuid } from "../../../../../src/contexts/shared/domain/value-object/Uuid";
import { RehersalTimestamp } from '../../../../../src/contexts/backoffice/rehersals/domain/RehersalTimestamp';
import { RehersalDuration } from '../../../../../src/contexts/backoffice/rehersals/domain/RehersalDuration';

describe('RehersalCreator', () => {
    let repository: RehersalRepositoryMock;

    beforeEach(() => {
        repository = new RehersalRepositoryMock();
    })

    it('should create a valid rehersal', async () => {

        const SUT = new RehersalCreator(repository);
        
        const id = new Uuid("3c560334-df73-4494-a2c9-f79af36c3f43");
        const timestamp = new RehersalTimestamp(1642204271);
        const duration = new RehersalDuration(2);

        const exepectedRehersal = new Rehersal({id, timestamp, duration});

        await SUT.run({ id: id.value, timestamp: timestamp.value, duration: duration.value});

        repository.assertSaveHasBeenCalledWith(exepectedRehersal);
    });

});