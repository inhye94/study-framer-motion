import { css } from "@emotion/react";
import type React from "react";
import { appleColors } from "../../../../styles/constants/colors";

interface IAppleBanner {
  backgroundUrl: string;
  children: React.ReactNode;
}

export default function AppleBanner({ backgroundUrl, children }: IAppleBanner) {
  return (
    <div
      css={css({
        position: "relative",
        borderRadius: 28,
        overflow: "hidden",
        transition: "scale 300ms ease-in-out",
        ":hover": {
          scale: 1.01,
        },
      })}
    >
      <div>
        <img src={backgroundUrl} alt="" />
      </div>

      <div
        css={css({
          position: "absolute",
          left: 0,
          top: "50%",
          zIndex: 1,
          paddingLeft: "6.25%",
          transform: "translateY(-50%)",
        })}
      >
        <div css={css({ padding: "56px 0" })}>{children}</div>
      </div>
    </div>
  );
}

function BannerParagraph({ text }: { text: string }) {
  return (
    <p
      css={css({
        color: appleColors.background,
        fontSize: 17,
        textAlign: "center",
        marginTop: "0.8rem",
        wordBreak: "keep-all",
      })}
    >
      {text}
    </p>
  );
}

function BannerNavGroup({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 20,
        marginTop: 31,
      })}
    >
      {children}
    </div>
  );
}

function BannerHeadline({ text }: { text: string }) {
  return (
    <h2
      css={css({
        textAlign: "center",
        color: appleColors.background,
        fontSize: 32,
        fontWeight: 600,
        wordBreak: "keep-all",
      })}
    >
      {text}
    </h2>
  );
}

AppleBanner.Paragraph = BannerParagraph;
AppleBanner.NavGroup = BannerNavGroup;
AppleBanner.Headline = BannerHeadline;
