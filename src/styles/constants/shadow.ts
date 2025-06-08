import { colors } from "./colors";

export const shadow = {
  text: `2px 0 0 ${colors.error}, -2px 0 0 ${colors.success},
  0 2px 0 ${colors.warning}, 0 -2px 0 ${colors.error}`,
  box: `0 2px 4px ${colors.shadow}`,
};
