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
    <div css={css([{ width: "100%" }, wrapperCss])}>
      <div
        css={css([
          { maxWidth: "1200px", margin: "0 auto", padding: "0 8px" },
          contentsCss,
        ])}
      >
        {children}
      </div>
    </div>
  );
}
