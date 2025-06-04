import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";
import { mockListData } from "../shared/mock/list";
import type { IListItem } from "../shared/types/list";
import Button from "./animated/Button";
import List from "./animated/List";

interface IListWithControlButtons {
  mode?: "sync" | "wait" | "popLayout";
}

export default function ListWithControlButtons({
  mode,
}: IListWithControlButtons) {
  const [list, setList] = useState<IListItem[]>(mockListData);

  const addListItem = useCallback(() => {
    setList((prev) => [
      ...prev,
      { id: uuid(), label: `${prev.length} 새로운 아이템🧒` },
    ]);
  }, []);

  const removeListItem = useCallback((id: string) => {
    setList((prev) => prev.filter((item) => item.id != id));
  }, []);

  return (
    <div>
      <Button onClick={addListItem}>추가 버튼</Button>

      <List list={list} mode={mode} onItemClick={removeListItem} />
    </div>
  );
}
