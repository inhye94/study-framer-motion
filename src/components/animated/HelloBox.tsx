import { css } from "@emotion/react";
import { motion } from "motion/react";
import { colors } from "../../styles/constants/colors";

export default function HelloBox() {
  return (
    <motion.div
      css={css`
        display: inline-block;
        padding: 4px 12px;
        border-radius: 4px;
        background-color: ${colors.black};
        font-size: 2rem;
        color: ${colors.white};
      `}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 2 }}
    >
      안녕안녕
    </motion.div>
  );
}
