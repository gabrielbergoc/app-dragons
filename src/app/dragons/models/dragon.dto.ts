import { History } from "./history.dto";

export interface DragonDto {
  id: number;
  name: string;
  histories: History[];
  title: string;
  createdAt: Date;
  lastModifiedAt: Date;
}
