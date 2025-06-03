import InitialAnimatePage from "../pages/sidebar/InitialAnimatePage";
import PracticePage from "../pages/sidebar/PracticePage";

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
];
