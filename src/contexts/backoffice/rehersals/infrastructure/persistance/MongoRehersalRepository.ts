import { MongoRepository } from "../../../../shared/infrastructure/persistance/mongo/MongoRepository";
import { Rehersal } from "../../domain/Rehersal";
import { RehersalRepository } from "../../domain/RehersalRepository";

export class MongoRehersalRepository extends MongoRepository<Rehersal> implements RehersalRepository {
    
    protected collectionName(): string {
        return 'rehersals'
    }

    save(rehersal: Rehersal): Promise<void> {
        return this.persist(rehersal.id.value, rehersal);
    }
}