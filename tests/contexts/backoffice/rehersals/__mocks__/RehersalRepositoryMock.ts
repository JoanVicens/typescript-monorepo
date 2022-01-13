import { Rehersal } from '../../../../../src/contexts/backoffice/rehersals/domain/Rehersal';
import { RehersalRepository } from '../../../../../src/contexts/backoffice/rehersals/domain/RehersalRepository';

export class RehersalRepositoryMock implements RehersalRepository {

    private mockSave: jest.Mock;

    constructor() {
        this.mockSave = jest.fn();
    }

    async save(rehersal: Rehersal): Promise<void> {
        this.mockSave(rehersal);
    }

    assertSaveHasBeenCalledWith(rehersal: Rehersal): void {
        expect(this.mockSave).toHaveBeenCalledWith(rehersal);
    };
}