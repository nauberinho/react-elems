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
var theme_1 = require("../../theme");
var DropDownContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: black;\n  border: 2px solid lightgray;\n  border-radius: 5px;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Old versions of Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n"], ["\n  color: black;\n  border: 2px solid lightgray;\n  border-radius: 5px;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Old versions of Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n"])));
var DropDownValue = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 2rem 1rem;\n  cursor: pointer;\n"], ["\n  padding: 2rem 1rem;\n  cursor: pointer;\n"])));
var ArrowWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-size: 20px 30px;\n"], ["\n  background-size: 20px 30px;\n"])));
var OptionsContainer = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: ", ";\n  animation: ", " 0.5s ease;\n  max-height: ", ";\n  overflow: hidden;\n"], ["\n  display: ", ";\n  animation: ", " 0.5s ease;\n  max-height: ", ";\n  overflow: hidden;\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? "block" : "none");
}, theme_1.animations.fadeInAndExpand, function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? "1000px" : "0");
});
var Option = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 2rem 1rem;\n  color: ", ";\n  width: auto;\n  border-top: 1px solid lightgray;\n  cursor: pointer;\n"], ["\n  padding: 2rem 1rem;\n  color: ", ";\n  width: auto;\n  border-top: 1px solid lightgray;\n  cursor: pointer;\n"])), function (_a) {
    var isActive = _a.isActive;
    return (isActive ? "green" : "black");
});
var DropDown = function (_a) {
    var isOpen = _a.isOpen, options = _a.options, placeholder = _a.placeholder, onToggle = _a.onToggle, onChange = _a.onChange, value = _a.value;
    return (react_1.default.createElement(DropDownContainer, null,
        react_1.default.createElement(DropDownValue, { onClick: onToggle },
            value && value.title,
            placeholder && !value && placeholder,
            !value && !placeholder && options[0].title),
        react_1.default.createElement(OptionsContainer, { isOpen: isOpen }, options.map(function (o) {
            return (react_1.default.createElement(Option, { onClick: function () { return onChange(o); }, isActive: value && value.key === o.key, key: o.key }, o.title));
        }))));
};
exports.default = DropDown;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
