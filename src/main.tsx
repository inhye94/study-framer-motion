import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import Sidebar from "./components/Sidebar.tsx";
import SidebarLayout from "./pages/layouts/SidebarLayout.tsx";
import { animateMenus } from "./shared/menus.ts";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route
            element={
              <SidebarLayout
                label="framer-motion 연습 화면"
                sidebar={<Sidebar />}
              />
            }
          >
            <Route index element={<p>홈이에용</p>} />

            <Route path="animate">
              {animateMenus.map(({ path, element: PageComponent }) => (
                <Route path={path} element={<PageComponent />} />
              ))}
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
