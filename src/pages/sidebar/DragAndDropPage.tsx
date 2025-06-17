import { css } from "@emotion/react";
import { Reorder, useDragControls, useMotionValue } from "motion/react";
import { useState } from "react";
import Article from "../../components/Article";
import DragAndDrop from "../../components/DragAndDrop";
import DragAndDropList from "../../components/DragAndDropList";
import Section from "../../components/Section";
import {
  mockFruitsData,
  mockFruitsData2,
  mockFruitsData3,
  mockListData,
} from "../../shared/mock/list";
import { colors } from "../../styles/constants/colors";
import { shadow } from "../../styles/constants/shadow";

const grid = 8;

const getWrapperStyle = (isDragging: boolean) =>
  css({
    backgroundColor: isDragging ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250,
  });

const getItemStyle = (isDragging: boolean) =>
  css({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",
  });

export default function DragAndDropPage() {
  const [items, setItems] = useState<string[]>(mockFruitsData);
  const [newItems, setNewItems] = useState<string[]>(mockFruitsData2);
  const [list, setList] = useState<string[]>(mockFruitsData3);

  return (
    <Section title="Drag And Drop">
      <Article title="라이브러리 - hello-pangea/dnd">
        <OnBoarding text="아이템을 위아래로 드래그해보세요!" />

        <DragAndDrop.Group
          id="testGroup1"
          list={newItems}
          onDragEnd={setNewItems}
          customStyles={getWrapperStyle}
        >
          {newItems.map((item, index) => (
            <DragAndDrop.Item
              key={item}
              id={item}
              index={index}
              customStyles={getItemStyle}
            >
              {item}
            </DragAndDrop.Item>
          ))}
        </DragAndDrop.Group>

        <DragAndDrop.Group
          id="testGroup2"
          list={list}
          onDragEnd={setList}
          customStyles={getWrapperStyle}
        >
          {list.map((item, index) => (
            <DragAndDrop.Item
              key={item}
              id={item}
              index={index}
              customStyles={getItemStyle}
            >
              {item}
            </DragAndDrop.Item>
          ))}
        </DragAndDrop.Group>
      </Article>

      <Article title="motion - Reorder 컴포넌트">
        <OnBoarding text="채소 아이템을 위아래로 드래그해보세요!" />
        <Reorder.Group
          axis="y"
          values={items}
          onReorder={setItems}
          css={css({
            display: "flex",
            flexDirection: "column",
            rowGap: 8,
            padding: 8,
            borderRadius: 8,
            backgroundColor: "gold",
          })}
        >
          {items.map((item) => (
            <Item key={item} item={item} />
          ))}
        </Reorder.Group>
      </Article>

      <Article title="직접 구현">
        <OnBoarding text="아이템을 위아래로 드래그해보세요!" />
        <DragAndDropList list={mockListData} />
      </Article>
    </Section>
  );
}

function OnBoarding({ text }: { text: string }) {
  return (
    <p
      css={css({
        fontSize: 12,
        color: colors.border,
        padding: "8px 0",
      })}
    >
      {text}
    </p>
  );
}

function Item({ item }: { item: string }) {
  const controls = useDragControls();
  const y = useMotionValue(0);

  return (
    <Reorder.Item
      value={item}
      id={item}
      style={{ y }} // 동적 스타일이라서 style에 넣음
      css={css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
        borderRadius: 8,
        backgroundColor: colors.white,
        boxShadow: shadow.box,
      })}
      dragListener={false}
      dragControls={controls}
    >
      <span css={css({ userSelect: "none" })}>{item}</span>
      <div
        css={css({
          width: 40,
          height: 40,
          borderRadius: 4,
          backgroundColor: "red",
          cursor: "pointer",
        })}
        onPointerDown={(e) => controls.start(e)}
      />
    </Reorder.Item>
  );
}
