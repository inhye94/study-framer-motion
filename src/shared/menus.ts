import DragPage from "../pages/sidebar/DragPage";
import InitialAnimatePage from "../pages/sidebar/InitialAnimatePage";
import PopLayoutPage from "../pages/sidebar/PopLayoutPage";
import PracticePage from "../pages/sidebar/PracticePage";
import VariantPage from "../pages/sidebar/VariantPage";

export interface INavMenu {
  path: string;
  label: string;
  element: React.FC;
}

export const animateMenus: INavMenu[] = [
  { path: "practice", label: "연습 페이지", element: PracticePage },
  {
    path: "initial",
    label: "초기 애니메이션 연습",
    element: InitialAnimatePage,
  },
  { path: "popLayout", label: "Exit Layout 연습", element: PopLayoutPage },
  { path: "variant", label: "variant 연습", element: VariantPage },
  { path: "drag", label: "drag 연습", element: DragPage },
  // { path: "reorder", label: "reorder 연습", element: ReorderPage },
];
