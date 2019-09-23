import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import DropDown from "../src/components/DropDown";

const animations = {
  fadeIn: keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }`,
  fadeInAndExpand: keyframes`
    0% {
      opacity: 0;
      max-height: 0;
    }
    100% {
      opacity: 1;
      max-height: 900px
    }`
};

const theme = {
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

export { DropDown, theme, animations };
