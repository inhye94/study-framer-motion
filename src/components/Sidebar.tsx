import styled from "@emotion/styled";
import { NavLink } from "react-router";
import { animateMenus } from "../shared/menus";
import { colors } from "../styles/constants/colors";
import { shadow } from "../styles/constants/shadow";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 8px 4px;
  background-color: ${colors.shadow};
  border-radius: 8px;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 4px;
  border-radius: 4px;
  font-weight: 500;
  color: ${colors.text};
  text-transform: capitalize;
  transition: all 150ms ease-in-out;
  text-decoration: none;

  &:hover {
    transform: translateX(8px);
    font-weight: 700;
  }

  &.active {
    color: ${colors.highlight};
    font-weight: 700;
    text-shadow: ${shadow.text};
  }
`;

export default function Sidebar() {
  return (
    <nav>
      <h2 className="visually-hidden">사이드바</h2>

      <StyledList>
        {animateMenus.map((menu) => (
          <li key={menu.path}>
            <StyledNavLink to={`/animate/${menu.path}`}>
              {menu.label}
            </StyledNavLink>
          </li>
        ))}
      </StyledList>
    </nav>
  );
}
