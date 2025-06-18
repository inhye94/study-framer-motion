import { css, type CSSObject } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "../App";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import NoSidebarLayout from "../pages/layouts/NoSidebarLayout";
import SidebarLayout from "../pages/layouts/SidebarLayout";
import { animateMenus } from "../routers/menus";
import { colors } from "../styles/constants/colors";

const background: { [key: string]: CSSObject } = {
  main: css({ backgroundColor: colors.highlight }),
  animate: css({ backgroundColor: colors.primary }),
  practice: css({ backgroundColor: colors.transparent }),
};

export default function RouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 */}
        <Route element={<App css={background.main} />}>
          <Route element={<NoSidebarLayout label="메인 페이지" />}>
            <Route index element={<Main text="홈" />} />
          </Route>
        </Route>

        {/* 기초 */}
        <Route element={<App css={background.animate} />}>
          <Route
            element={
              <SidebarLayout
                label="framer-motion 기초"
                sidebar={<Sidebar menu={animateMenus} />}
              />
            }
          >
            <Route path="animate">
              <Route
                index
                element={<Main text="framer motion 기초 동작 연습" />}
              />
              {animateMenus.map(({ path, element: PageComponent }) => (
                <Route key={path} path={path} element={<PageComponent />} />
              ))}
            </Route>
          </Route>
        </Route>

        {/* 연습 */}
        <Route element={<App css={background.practice} />}>
          <Route element={<NoSidebarLayout label="framer-motion 연습" />}>
            <Route path="practice">
              <Route index element={<Main text="practice 홈" />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
