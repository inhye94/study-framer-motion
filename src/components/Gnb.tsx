import { css } from "@emotion/react";
import { Link } from "react-router";
import { colors } from "../styles/constants/colors";
import { shadow } from "../styles/constants/shadow";
import { zIndex } from "../styles/constants/z-index";
import Container from "./Container";

export default function Gnb() {
  return (
    <Container
      wrapperCss={css`
        position: sticky;
        left: 0;
        top: 0;
        z-index: ${zIndex.gnb};
        padding: 10px 0;
        border-bottom: 1px solid ${colors.border};
        box-shadow: ${shadow.box};
        backdrop-filter: blur(4px);
      `}
    >
      <div
        css={css({
          display: "flex",
          alignItems: "center",
        })}
      >
        <h1
          css={css`
            font-size: 1.5rem;
            font-weight: bold;
            color: ${colors.text};
            text-shadow: 0 0 0 rgba(0, 0, 0, 1);
            transition: all 150ms ease-in-out;

            :hover {
              color: ${colors.highlight};
              text-shadow: ${shadow.text};
            }
          `}
        >
          <Link to="/">Framer Motion 뽀개기</Link>
        </h1>

        <ul
          css={{
            display: "flex",
            alignItems: "center",
            columnGap: 8,
            marginLeft: 12,
          }}
        >
          <li>
            <Link to="animate">기초 페이지</Link>
          </li>
          <li>
            <Link to="practice">연습 페이지</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}
