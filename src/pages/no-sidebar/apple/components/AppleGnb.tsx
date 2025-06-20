import { css } from "@emotion/react";
import { Link } from "react-router";
import { appleColors } from "../../../../styles/constants/colors";
import { gnbMenus } from "../menus";

interface IAppleGnbProps {
  className?: string;
}

export default function AppleGnb({ className }: IAppleGnbProps) {
  return (
    <ul
      css={css({ display: "flex", justifyContent: "space-between" })}
      className={className}
    >
      {gnbMenus.map((item) => (
        <li key={item.id}>
          <Link
            to=""
            css={css({
              display: "flex",
              alignItems: "center",
              height: 44,
              fontSize: 12,
              color: appleColors.primary,
            })}
          >
            {item.icon ? (
              <>
                <item.icon aria-label={item.text} />
                <span className="visually-hidden">{item.text}</span>
              </>
            ) : (
              <span css={css({ whiteSpace: "nowrap" })}>{item.text}</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
