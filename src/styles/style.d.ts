import "styled-components";
import { FontsTypes, ColorsTypes } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: FontsTypes;
    colors: ColorsTypes;
  }
}
