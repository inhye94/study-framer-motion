import { css } from "@emotion/react";
import { motion } from "motion/react";
import { colors } from "../../styles/constants/colors";

interface IButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button({ children, onClick, ...props }: IButtonProps) {
  return (
    <motion.button
      css={css`
        padding: 8px 16px;
        background-color: ${colors.warning};
        color: ${colors.text};
        font-weight: 600;
        border-radius: 4px;
      `}
      onClick={onClick}
      transition={{ duration: 0.15 }}
      whileHover={{ color: colors.white, backgroundColor: colors.error }}
      whileTap={{ scale: 0.9, backgroundColor: colors.success }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
