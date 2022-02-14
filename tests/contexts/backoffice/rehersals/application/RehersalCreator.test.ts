import { RehersalCreator } from '../../../../../src/contexts/backoffice/rehersals/application/RehersalCreator';
import { RehersalMother } from '../model/RehersalMother';
import { RehersalRepositoryMock } from "../__mocks__/RehersalRepositoryMock";
import { CreateReheresalRequestMother } from './CreateRehersalRequestMother';

describe('RehersalCreator', () => {
    let repository: RehersalRepositoryMock;

    beforeEach(() => {
        repository = new RehersalRepositoryMock();
    })

    it('should create a valid rehersal', async () => {

        const request = CreateReheresalRequestMother.random();        
        const exepectedRehersal = RehersalMother.fromRequest(request);
        
        const SUT = new RehersalCreator(repository);
        await SUT.run(request);

        repository.assertSaveHasBeenCalledWith(exepectedRehersal);
    });

});