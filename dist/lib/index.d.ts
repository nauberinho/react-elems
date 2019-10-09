import DropDown from "../src/components/DropDown";
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
    animations: {
        fadeIn: import("styled-components").Keyframes;
        fadeInAndExpand: import("styled-components").Keyframes;
    };
    mediaQueries: {
        mobileS: (limit: string) => string;
        mobileM: (limit: string) => string;
        mobileL: (limit: string) => string;
        tablet: (limit: string) => string;
        laptop: (limit: string) => string;
        laptopL: (limit: string) => string;
        desktop: (limit: string) => string;
        desktopL: (limit: string) => string;
    };
};
export { DropDown, theme };
