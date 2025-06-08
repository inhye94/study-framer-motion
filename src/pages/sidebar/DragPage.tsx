import { css } from "@emotion/react";
import { motion } from "motion/react";
import { useRef } from "react";
import Article from "../../components/Article";
import Section from "../../components/Section";
import { colors } from "../../styles/constants/colors";

export default function DragPage() {
  const containerBox = useRef(null);

  return (
    <Section title="Drag 연습">
      <Article title="drag props">
        <div
          ref={containerBox}
          css={css({
            width: 300,
            height: 300,
            backgroundColor: colors.shadow,
            borderRadius: 16,
          })}
        >
          <motion.div
            css={css({
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 100,
              height: 100,
              backgroundColor: "red",
              borderRadius: 8,
              fontSize: 12,
              transition: "background-color 150ms ease-in-out",
            })}
            whileHover={{ backgroundColor: "hotpink" }}
            whileTap={{ scale: 1.4 }}
            dragConstraints={containerBox}
            dragElastic={0.8}
            drag
            dragDirectionLock
          >
            드래그 해보셈
          </motion.div>
        </div>
      </Article>
    </Section>
  );
}
