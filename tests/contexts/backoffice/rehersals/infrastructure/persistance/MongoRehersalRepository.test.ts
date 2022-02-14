import container from '../../../../../../src/apps/backoffice/backend/dependency-injection';
import { EnvironmentArranger } from '../../../../shared/infrastructure/arranger/EnvironmentArranger';
import { RehersalRepository } from '../../../../../../src/contexts/backoffice/rehersals/domain/RehersalRepository'
import { RehersalMother } from '../../model/RehersalMother';

const repository: RehersalRepository = container.get('Backoffice.Rehersals.domain.RehersalRepository');
const environmentArranger: Promise<EnvironmentArranger> = container.get('Backoffice.Backend.EnvironmentArranger');


beforeEach(async () => {
    await (await environmentArranger).arrange();    
});

afterAll(async () => {
    await (await environmentArranger).arrange();
    await (await environmentArranger).close();
});

describe('RehersalRepository', () => {
    describe('.save', () => {
        it('should sava a rehersal',async () => {
            const rehersal = RehersalMother.random();

            await repository.save(rehersal);
        });
    });
});