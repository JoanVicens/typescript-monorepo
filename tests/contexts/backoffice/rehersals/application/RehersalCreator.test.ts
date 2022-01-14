import { RehersalCreator } from '../../../../../src/contexts/backoffice/rehersals/application/RehersalCreator';
import { Rehersal } from '../../../../../src/contexts/backoffice/rehersals/domain/Rehersal';
import { RehersalRepositoryMock } from "../__mocks__/RehersalRepositoryMock";

describe('RehersalCreator', () => {
    let repository: RehersalRepositoryMock;

    beforeEach(() => {
        repository = new RehersalRepositoryMock();
    })

    it('should create a valid rehersal', async () => {

        const SUT = new RehersalCreator(repository);
        
        const id = "id";
        const daytime = "daytime";
        const duration = "2 hours";

        const exepectedRehersal = new Rehersal( id, daytime, duration);

        await SUT.run({id, daytime, duration});

        repository.assertSaveHasBeenCalledWith(exepectedRehersal);
    });
});