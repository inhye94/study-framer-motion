import { css } from "@emotion/react";
import { Link } from "react-router";
import Section from "../../components/Section";

export default function PracticeMainHome() {
  return (
    <>
      <Section title="apple">
        <div
          css={css`
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;

            @media screen and (min-width: 768px) {
              grid-template-columns: 1fr 1fr 1fr;
            }
          `}
        >
          <Link to="apple">아이폰 메인</Link>
          <Link to="apple/iphone">아이폰 상세</Link>
        </div>
      </Section>
    </>
  );
}
