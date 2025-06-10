import { css } from "@emotion/react";
import { useCallback, useRef, useState } from "react";
import type { IListItem } from "../shared/types/list";
import { shadow } from "../styles/constants/shadow";

export default function DragAndDropList({ list }) {
  const dragItemIndex = useRef<number | null>(null);
  const dragOverItemIndex = useRef<number | null>(null);
  const [listData, setListData] = useState<IListItem[]>(list);

  const dragStart = useCallback(
    (e: React.DragEvent<HTMLLIElement>, position: number) => {
      dragItemIndex.current = position;
      console.log(e.target.innerHTML);
    },
    []
  );

  const dragEnter = useCallback(
    (e: React.DragEvent<HTMLLIElement>, position: number) => {
      dragOverItemIndex.current = position;
      console.log(e.target.innerText);
    },
    []
  );

  const drop = useCallback(() => {
    const copiedList = [...listData];
    const holdingItem = copiedList[dragItemIndex.current];

    copiedList.splice(dragItemIndex.current, 1);
    copiedList.splice(dragOverItemIndex.current, 0, holdingItem);

    dragItemIndex.current = null;
    dragOverItemIndex.current = null;

    setListData(copiedList);
  }, [listData]);

  return (
    <ul css={css({ display: "flex", flexDirection: "column", rowGap: 8 })}>
      {listData.map((item, index) => (
        <li
          key={item.id}
          css={css({
            border: "1px solid #ddd",
            padding: 8,
            borderRadius: 4,
            boxShadow: shadow.box,
          })}
          onDragStart={(e) => dragStart(e, index)}
          onDragEnter={(e) => dragEnter(e, index)}
          onDragEnd={drop}
          draggable // drag 효과가 생김
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
}
