import { css } from "@emotion/react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";
import Button from "../../components/animated/Button";
import Article from "../../components/Article";
import Section from "../../components/Section";
import { mockListData } from "../../shared/mock/list";
import type { IListItem } from "../../shared/types/list";
import { shadow } from "../../styles/constants/shadow";

const listStyle = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
  hidden: { opacity: 0, y: 40 },
  exit: {
    opacity: 0,
    y: -40,
    transition: {
      when: "afterChlidren",
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const itemStyle = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
  exit: { opacity: 0, x: 100 },
};

export default function VariantPage() {
  const [mockDatas, setMockDatas] = useState<IListItem[]>(mockListData);
  const [isShow, setIsShow] = useState<boolean>(true);
  const [status, setStatus] = useState<"inactive" | "active" | "complete">(
    "complete"
  );
  const handleRemoveItem = useCallback((index: number) => {
    setMockDatas((prev) => prev.filter((_, i) => index != i));
  }, []);

  return (
    <Section title="variant와 Propagation을 이용한 초기 목록 보여주기">
      <Article title="variant + propagation">
        <AnimatePresence>
          {isShow && (
            <motion.ul
              variants={listStyle}
              css={css({ border: "1px solid red" })}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <AnimatePresence mode="popLayout" propagate>
                {mockDatas.map((item, i) => (
                  <motion.li
                    key={item.id}
                    variants={itemStyle}
                    exit="exit"
                    // exit={itemStyle.exit}
                    // exit={{ opacity: 0, x: 100 }}
                    onClick={handleRemoveItem.bind(null, i)}
                    layout
                  >
                    {item.label}
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          )}
        </AnimatePresence>

        <div>
          {!isShow && <Button onClick={() => setIsShow(true)}>보이기</Button>}
          {isShow && <Button onClick={() => setIsShow(false)}>삭제하기</Button>}
        </div>
      </Article>

      <Article title="variant - 권장">
        <motion.div
          animate={status} // pass in our React state!
          variants={{
            inactive: { scale: 0.9, color: "gray" },
            active: { scale: 1, color: "blue" },
            complete: { scale: 1, color: "green" },
          }}
        >
          <p
            css={css({
              padding: "4px",
              borderRadius: "4px",
              boxShadow: shadow.box,
              backgroundColor: "lavender",
            })}
          >
            아무 문구를 적어주세요
          </p>
        </motion.div>

        <div>
          <Button onClick={() => setStatus("active")}>active</Button>
          <Button onClick={() => setStatus("inactive")}>inactive</Button>
          <Button onClick={() => setStatus("complete")}>complete</Button>
        </div>
      </Article>
    </Section>
  );
}
