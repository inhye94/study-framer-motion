import { css, type CSSObject } from "@emotion/react";
import { motion } from "motion/react";
import Container from "../../../../components/Container";
import { easing } from "../../../../styles/constants/animation";
import { appleColors } from "../../../../styles/constants/colors";

// section
interface IAppleSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function AppleSection({
  children,
  className,
}: IAppleSectionProps) {
  return (
    <section className={className}>
      <Container contentsCss={css({ width: "87.5vw", maxWidth: 1680 })}>
        {children}
      </Container>
    </section>
  );
}

// header
interface IAppleSectionHeaderProps {
  children?: React.ReactNode;
  title: string;
  size?: "big" | "default";
}

function AppleSectionHeader({
  children,
  title,
  size = "default",
}: IAppleSectionHeaderProps) {
  return (
    <header
      css={css({
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        paddingBottom: 80,
      })}
    >
      <motion.h4
        css={css({
          fontSize: size === "default" ? 56 : 80,
          fontWeight: 600,
          color: appleColors.secondary,
        })}
        initial={{ opacity: 0, translateY: 30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.7, ease: easing }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h4>
      {children && children}
    </header>
  );
}

// description
const descriptonStyle: Record<
  NonNullable<IAppleSectionDescriptionProps["type"]>,
  CSSObject
> = {
  text: css`
    font-size: 28px;
    font-weight: 700;
    color: ${appleColors.secondary};
  `,
  link: css`
    font-size: 17;
    color: ${appleColors.blueDark};
  `,
};

interface IAppleSectionDescriptionProps {
  type?: "text" | "link";
  children: React.ReactNode;
}

function AppleSectionDescription({
  type = "text",
  children,
}: IAppleSectionDescriptionProps) {
  return (
    <motion.div
      css={descriptonStyle[type]}
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.9, ease: easing }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

AppleSection.Header = AppleSectionHeader;
AppleSection.Description = AppleSectionDescription;
