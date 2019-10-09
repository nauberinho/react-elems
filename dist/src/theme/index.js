"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
// Animations
var animations = {
    fadeIn: styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      0% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 1;\n      }"], ["\n      0% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 1;\n      }"]))),
    fadeInAndExpand: styled_components_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      0% {\n        opacity: 0;\n        max-height: 0;\n      }\n      100% {\n        opacity: 1;\n        max-height: 1000px;\n      }"], ["\n      0% {\n        opacity: 0;\n        max-height: 0;\n      }\n      100% {\n        opacity: 1;\n        max-height: 1000px;\n      }"])))
};
exports.animations = animations;
// Colors
var colors = {
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
};
var templateObject_1, templateObject_2;
