import { css } from "@emotion/react";
import { Outlet } from "react-router";
import Gnb from "./components/Gnb";

interface IAppProps {
  className?: string;
}

function App({ className }: IAppProps) {
  return (
    <div
      css={css`
        width: 100%;
        min-height: ${["100dvh", `${window.innerHeight}px`, "100vh"]};
      `}
      className={className}
    >
      <Gnb />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
