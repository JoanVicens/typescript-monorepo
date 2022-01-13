import { Rehersal } from "./Rehersal";

export interface RehersalRepository {
    save(rehersal: Rehersal): Promise<void>;
}