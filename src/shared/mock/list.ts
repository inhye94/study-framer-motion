import { v4 as uuid } from "uuid";
import type { IListItem } from "../types/list";

export const mockListData: IListItem[] = [
  { id: uuid(), label: "🐹" },
  { id: uuid(), label: "🤯" },
  { id: uuid(), label: "🏋️‍♀️" },
  { id: uuid(), label: "🍀" },
  { id: uuid(), label: "🍌" },
  { id: uuid(), label: "🎯" },
];
