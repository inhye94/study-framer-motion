import DragAndDropPage from "../pages/sidebar/DragAndDropPage";
import DragPage from "../pages/sidebar/DragPage";
import InitialAnimatePage from "../pages/sidebar/InitialAnimatePage";
import PopLayoutPage from "../pages/sidebar/PopLayoutPage";
import VariantPage from "../pages/sidebar/VariantPage";

export interface INavMenu {
  path: string;
  text: string;
  element: React.FC;
}

export const animateMenus: INavMenu[] = [
  {
    path: "initial",
    text: "초기 애니메이션 연습",
    element: InitialAnimatePage,
  },
  { path: "popLayout", text: "Exit Layout 연습", element: PopLayoutPage },
  { path: "variant", text: "variant 연습", element: VariantPage },
  { path: "drag", text: "drag 연습", element: DragPage },
  { path: "reorder", text: "reorder 연습", element: DragAndDropPage },
];

export const practiceMenus: INavMenu[] = [];
