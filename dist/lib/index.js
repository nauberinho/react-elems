"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var DropDown_1 = __importDefault(require("../src/components/DropDown"));
exports.DropDown = DropDown_1.default;
// Media queries
var mqSizes = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px"
};
var theme = {
    colors: {
        yellow: {
            main: "#D5B507"
        },
        black: { main: "#4E4E4E" },
        red: {
            main: "#C70039"
        },
        purple: {
            main: "#9851D4"
        },
        blue: {
            main: "#5182D4"
        },
        green: {
            main: "#10D775"
        },
        orange: {
            main: "orange"
        }
    },
    animations: {
        fadeIn: styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      0% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 1;\n      }"], ["\n      0% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 1;\n      }"]))),
        fadeInAndExpand: styled_components_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      0% {\n        opacity: 0;\n        max-height: 0;\n      }\n      100% {\n        opacity: 1;\n        max-height: 900px\n      }"], ["\n      0% {\n        opacity: 0;\n        max-height: 0;\n      }\n      100% {\n        opacity: 1;\n        max-height: 900px\n      }"])))
    },
    mediaQueries: {
        mobileS: function (limit) { return "(" + limit + "-width: " + mqSizes.mobileS + ")"; },
        mobileM: function (limit) { return "(" + limit + "-width: " + mqSizes.mobileM + ")"; },
        mobileL: function (limit) { return "(" + limit + "-width: " + mqSizes.mobileL + ")"; },
        tablet: function (limit) { return "(" + limit + "-width: " + mqSizes.tablet + ")"; },
        laptop: function (limit) { return "(" + limit + "-width: " + mqSizes.laptop + ")"; },
        laptopL: function (limit) { return "(" + limit + "-width: " + mqSizes.laptopL + ")"; },
        desktop: function (limit) { return "(" + limit + "-width: " + mqSizes.desktop + ")"; },
        desktopL: function (limit) { return "(" + limit + "-width: " + mqSizes.desktop + ")"; }
    }
};
exports.theme = theme;
var templateObject_1, templateObject_2;
