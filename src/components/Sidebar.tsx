import styled from "@emotion/styled";
import { NavLink } from "react-router";
import { type INavMenu } from "../routers/menus";
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

interface ISidebarProps {
  menu: INavMenu[];
}

export default function Sidebar({ menu }: ISidebarProps) {
  return (
    <nav>
      <h2 className="visually-hidden">사이드바</h2>

      <StyledList>
        {menu.map((item) => (
          <li key={item.path}>
            <StyledNavLink to={`/animate/${item.path}`}>
              {item.text}
            </StyledNavLink>
          </li>
        ))}
      </StyledList>
    </nav>
  );
}
