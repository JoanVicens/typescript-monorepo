import { Collection, MongoClient } from "mongodb";
import { AggregateRoot } from "../../../domain/value-object/AggregateRoot";


export abstract class MongoRepository<T extends AggregateRoot> {

    constructor(private _client: Promise<MongoClient>) {}

    protected abstract collectionName(): string;

    protected async persist(id: string, aggreateRoot: T): Promise<void> {
        const collection = await this.collection();

        const document = { ...aggreateRoot.toPrimitives(), _id: id, id: undefined };

        await collection.updateOne({ _id: id }, { $set: document }, { upsert: true });
    }

    protected async collection(): Promise<Collection> {
        return (await this._client).db().collection(this.collectionName());
    }
}