"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var DropDownContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 2rem;\n  color: black;\n"], ["\n  padding: 2rem;\n  color: black;\n"])));
var DropDown = function (_a) {
    var isOpen = _a.isOpen;
    return (react_1.default.createElement(DropDownContainer, null, isOpen ? react_1.default.createElement("span", null, "I am open") : react_1.default.createElement("span", null, "Im closed")));
};
exports.DropDown = DropDown;
var DummyComponent2 = function () { return react_1.default.createElement("div", null, "I am a dummy react npm module"); };
exports.DummyComponent2 = DummyComponent2;
var templateObject_1;
