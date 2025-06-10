import { css } from "@emotion/react";
import { Reorder, useDragControls, useMotionValue } from "motion/react";
import { useState } from "react";
import Article from "../../components/Article";
import DragAndDropList from "../../components/DragAndDropList";
import Section from "../../components/Section";
import { mockListData } from "../../shared/mock/list";
import { colors } from "../../styles/constants/colors";
import { shadow } from "../../styles/constants/shadow";

const initialItems: string[] = [
  "🍅 Tomato",
  "🥒 Cucumber",
  "🧀 Cheese",
  "🥬 Lettuce",
];

export default function DragAndDropPage() {
  const [items, setItems] = useState<string[]>(initialItems);

  return (
    <Section title="Drag And Drop">
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
