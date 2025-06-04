import styled from "@emotion/styled";
import { colors } from "../styles/constants/colors";

interface ISectionProps {
  title: string;
  children: React.ReactNode;
}

const Title = styled.h2`
  display: flex;
  align-items: center;
  column-gap: 4px;
  padding: 8px 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  font-size: 1.6rem;
  font-weight: 700;
  background-color: ${colors.shadow};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export default function Section({ title, children, ...props }: ISectionProps) {
  return (
    <section {...props}>
      <Title>
        <span aria-hidden>🍑</span>
        {title}
      </Title>

      <ContentWrapper>{children}</ContentWrapper>
    </section>
  );
}
