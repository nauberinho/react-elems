import { FC } from "react";
declare const animations: {
  fadeIn: import("styled-components").Keyframes;
  fadeInAndExpand: import("styled-components").Keyframes;
};
declare const theme: {
  colors: {
    yellow: {
      main: string;
    };
    black: {
      main: string;
    };
    red: {
      main: string;
    };
    purple: {
      main: string;
    };
    blue: {
      main: string;
    };
    green: {
      main: string;
    };
    orange: {
      main: string;
    };
  };
};
declare const DropDownOption: import("styled-components").StyledComponent<
  "div",
  any,
  {},
  never
>;
interface DropDownOption {
  title: string;
  key: string;
}
interface DropDownProps {
  isOpen: boolean;
  options: Array<DropDownOption>;
  value: DropDownOption;
  optional?: any;
}
declare const DropDown: FC<DropDownProps>;
declare const DummyComponent2: () => JSX.Element;
export { DropDown, DummyComponent2, theme, animations };
