import { css, type SerializedStyles } from "@emotion/react";

interface IContainerProps {
  wrapperCss?: SerializedStyles;
  contentsCss?: SerializedStyles;
  children: React.ReactNode;
}

export default function Container({
  wrapperCss,
  contentsCss,
  children,
}: IContainerProps) {
  return (
    <div css={wrapperCss}>
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          ${contentsCss}
        `}
      >
        {children}
      </div>
    </div>
  );
}
