import { css } from "@emotion/react";
import { Link } from "react-router";
import { appleColors } from "../../../../styles/constants/colors";
import { iPhoneMenus } from "../menus";

interface IIPhoneMenuProps {
  className?: string;
}

export default function IPhoneMenu({ className }: IIPhoneMenuProps) {
  return (
    <ul
      css={css({
        display: "flex",
        paddingTop: 4,
        paddingBottom: 5,
      })}
      className={className}
    >
      {iPhoneMenus.map((item) => (
        <li key={item.id} css={css({ padding: "0 20px" })}>
          <Link to="iphone" css={css({ display: "block", cursor: "pointer" })}>
            <img
              css={css({
                height: 54,
                width: "auto",
                margin: "0 auto 4px auto",
              })}
              src={item.src}
              alt={`${item.text} 이미지`}
            />
            <span
              css={css({
                fontSize: 12,
                color: appleColors.primary,
                whiteSpace: "nowrap",
              })}
            >
              {item.text}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
