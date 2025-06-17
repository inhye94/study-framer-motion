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

export const mockFruitsData: string[] = [
  "🍅 Tomato",
  "🥒 Cucumber",
  "🧀 Cheese",
  "🥬 Lettuce",
];

export const mockFruitsData2: string[] = [
  "🍌 Banana",
  "🍑 Peach",
  "🍊 Orange",
  "🥕 Carrot",
];
