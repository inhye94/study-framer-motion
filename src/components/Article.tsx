import { css } from "@emotion/react";
import { colors } from "../styles/constants/colors";

interface IArticleProps {
  title: string;
  children: React.ReactNode;
}

export default function Article({ title, children, ...props }: IArticleProps) {
  return (
    <article
      css={css`
        padding: 16px;
        background-color: ${colors.white};
        border-radius: 8px;
      `}
      {...props}
    >
      <h3
        css={css`
          margin-bottom: 12px;
          font-size: 1.2rem;
          font-weight: 600;
          text-transform: capitalize;
        `}
      >
        🟡 {title}
      </h3>
      <div>{children}</div>
    </article>
  );
}
