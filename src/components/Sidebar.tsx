import { css } from "@emotion/react";
import { NavLink } from "react-router";
import { colors } from "../styles/constants/colors";
import { shadow } from "../styles/constants/shadow";

export default function Sidebar() {
  return (
    <nav>
      <h2 className="visually-hidden">사이드바</h2>

      <ul
        css={css`
          display: flex;
          flex-direction: column;
          row-gap: 8px;
          padding: 8px 4px;
          background-color: ${colors.shadow};
          border-radius: 8px;

          li {
            padding: 4px;
            border-radius: 4px;
            font-weight: 500;
            transition: all 150ms ease-in-out;

            :hover {
              transform: translateX(8px);
              font-weight: 700;
            }
          }
        `}
      >
        <li>
          <NavLink
            to="/practice"
            style={({ isActive }) => ({
              fontWeight: 700,
              color: isActive ? colors.highlight : colors.text,
              textShadow: isActive ? shadow.text : "none",
            })}
          >
            연습 페이지
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
