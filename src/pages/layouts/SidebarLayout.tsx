import { css } from "@emotion/react";
import { Outlet } from "react-router";
import Container from "../../components/Container";

interface ISidebarLayoutProps {
  label: string;
  sidebar: React.ReactNode;
}

export default function SidebarLayout({ label, sidebar }: ISidebarLayoutProps) {
  return (
    <section>
      <h2 className="visually-hidden">{label}</h2>

      <Container
        contentsCss={css`
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          padding-top: 20px;

          @media screen and (min-width: 768px) {
            grid-template-columns: 200px 1fr;
          }
        `}
      >
        {sidebar}
        <Outlet />
      </Container>
    </section>
  );
}
