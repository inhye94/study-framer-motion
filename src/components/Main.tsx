import { css } from "@emotion/react";
import { colors } from "../styles/constants/colors";

interface IMainProps {
  text: string;
}

export default function Main({ text }: IMainProps) {
  return (
    <div
      css={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 100,
        borderRadius: 8,
        textTransform: "capitalize",
        fontWeight: 700,
        fontSize: 18,
        backgroundColor: colors.shadow,
      })}
    >
      {text}
    </div>
  );
}
