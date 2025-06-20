import { css, type CSSObject, type SerializedStyles } from "@emotion/react";
import type { PolymorphicComponentProps } from "../../../../shared/types/utils";
import { appleColors } from "../../../../styles/constants/colors";

// style type
type ColorType = NonNullable<IAppleButtonStyleProps["color"]>;
type VariantType = NonNullable<IAppleButtonStyleProps["variant"]>;
type StyleType = CSSObject | SerializedStyles;

const variantStyle: Record<VariantType, Record<ColorType, StyleType>> = {
  filled: {
    white: {
      backgroundColor: appleColors.background,
      color: appleColors.black,
      ":hover": {
        backgroundColor: appleColors.white,
      },
    },
    blue: {
      backgroundColor: appleColors.blue,
      color: appleColors.white,
      ":hover": {
        backgroundColor: appleColors.blueLight,
      },
    },
  },
  outlined: {
    white: {
      border: `1px solid ${appleColors.background}`,
      color: appleColors.background,
      ":hover": {
        backgroundColor: appleColors.white,
        color: appleColors.black,
        borderColor: appleColors.white,
      },
    },
    blue: {
      border: `1px solid ${appleColors.blue}`,
      color: appleColors.blue,
      ":hover": {
        backgroundColor: appleColors.blue,
        color: appleColors.white,
        borderColor: appleColors.blue,
      },
    },
  },
  ghost: {
    white: {
      color: appleColors.secondary,
      ":hover": {
        textDecoration: "underline",
      },
    },
    blue: {
      color: appleColors.blue,
      ":hover": {
        textDecoration: "underline",
      },
    },
  },
};

// component type
interface IAppleButtonProps {
  children?: React.ReactNode;
}

interface IAppleButtonStyleProps {
  color?: "white" | "blue";
  variant?: "filled" | "outlined" | "ghost";
}

export default function AppleButton<T extends React.ElementType = "button">({
  as,
  color = "white",
  variant = "filled",
  children,
  ...props
}: PolymorphicComponentProps<T, IAppleButtonProps | IAppleButtonStyleProps>) {
  const Element = as || "button";
  return (
    <Element
      {...props}
      css={css([
        {
          display: "inline-block",
          height: 44,
          minWidth: 70,
          padding: "11px 21px",
          borderRadius: 100,
          fontSize: 17,
          transition: "all 150ms ease-in-out",
          whiteSpace: "nowrap",
        },
        variantStyle[variant][color],
      ])}
    >
      {children}
    </Element>
  );
}
