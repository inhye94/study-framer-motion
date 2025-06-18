import { css } from "@emotion/react";
import { Outlet } from "react-router";
import Container from "../../components/Container";

interface INoSidebarLayoutProps {
  label: string;
}

export default function NoSidebarLayout({ label }: INoSidebarLayoutProps) {
  return (
    <section>
      <h2 className="visually-hidden">{label}</h2>

      <Container contentsCss={css({ paddingTop: 20, paddingBottom: 20 })}>
        <Outlet />
      </Container>
    </section>
  );
}
