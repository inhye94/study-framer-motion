import { css } from "@emotion/react";
import { Outlet } from "react-router";
import Gnb from "./components/Gnb";
import { colors } from "./styles/constants/colors";

function App() {
  return (
    <main
      css={css`
        background-color: ${colors.primary};
        width: 100%;
        min-height: ${["100dvh", `${window.innerHeight}px`, "100vh"]};
      `}
    >
      <Gnb />
      <Outlet />
    </main>
  );
}

export default App;
