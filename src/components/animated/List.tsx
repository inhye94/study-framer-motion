import { css } from "@emotion/react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback } from "react";
import type { IListItem } from "../../shared/types/list";
import { colors } from "../../styles/constants/colors";

interface IListProps {
  list: IListItem[];
  mode?: "sync" | "wait" | "popLayout";
  onItemClick?: (id: string) => void;
}

export default function List({ list, mode = "sync", onItemClick }: IListProps) {
  const listItemClickHandler = useCallback((id: string) => {
    if (onItemClick) {
      onItemClick(id);
    }
  }, []);

  return (
    <ul
      css={css`
        display: flex;
        flex-direction: column;
        row-gap: 4px;
      `}
    >
      <AnimatePresence mode={mode}>
        {list.map((item) => (
          <motion.li
            key={item.id}
            onClick={listItemClickHandler.bind(null, item.id)}
            css={css`
              padding: 4px 8px;
              border-radius: 4px;
              font-weight: 500;
              background-color: ${colors.secondary};
            `}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ backgroundColor: colors.tertiary }}
            whileTap={{ backgroundColor: colors.border }}
            transition={{ type: "spring", duration: 1 }}
            layout
          >
            {item.label}
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}
