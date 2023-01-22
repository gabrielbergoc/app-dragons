import { DragonDto } from "./dragon.dto";

export interface History {
    id: number;
    dragonId: DragonDto['id'];
    title: string;
    content: string;
}