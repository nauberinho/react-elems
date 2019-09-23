"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var animations = {
    fadeIn: styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }"], ["\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }"]))),
    fadeInAndExpand: styled_components_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    0% {\n      opacity: 0;\n      max-height: 0;\n    }\n    100% {\n      opacity: 1;\n      max-height: 900px\n    }"], ["\n    0% {\n      opacity: 0;\n      max-height: 0;\n    }\n    100% {\n      opacity: 1;\n      max-height: 900px\n    }"])))
};
exports.animations = animations;
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
    }
};
exports.theme = theme;
var DropDownContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 2rem;\n  color: black;\n"], ["\n  padding: 2rem;\n  color: black;\n"])));
var DropDownOption = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 2rem;\n  color: black;\n  width: auto;\n  border: 1opx solid black;\n"], ["\n  padding: 2rem;\n  color: black;\n  width: auto;\n  border: 1opx solid black;\n"])));
var DropDown = function (_a) {
    var isOpen = _a.isOpen, options = _a.options, value = _a.value;
    return (react_1.default.createElement(DropDownContainer, null,
        isOpen ? react_1.default.createElement("span", null, value.title) : react_1.default.createElement("span", null, "Im closed"),
        options.map(function (o) {
            react_1.default.createElement("div", { key: o.key }, o.title);
        })));
};
exports.DropDown = DropDown;
var DummyComponent2 = function () { return react_1.default.createElement("div", null, "I am a dummy react npm module"); };
exports.DummyComponent2 = DummyComponent2;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
