import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import DropDown from "../src/components/DropDown";

// Media queries
const mqSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
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
  },
  animations: {
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
  },
  mediaQueries: {
    mobileS: (limit: string) => `(${limit}-width: ${mqSizes.mobileS})`,
    mobileM: (limit: string) => `(${limit}-width: ${mqSizes.mobileM})`,
    mobileL: (limit: string) => `(${limit}-width: ${mqSizes.mobileL})`,
    tablet: (limit: string) => `(${limit}-width: ${mqSizes.tablet})`,
    laptop: (limit: string) => `(${limit}-width: ${mqSizes.laptop})`,
    laptopL: (limit: string) => `(${limit}-width: ${mqSizes.laptopL})`,
    desktop: (limit: string) => `(${limit}-width: ${mqSizes.desktop})`,
    desktopL: (limit: string) => `(${limit}-width: ${mqSizes.desktop})`
  }
};

export { DropDown, theme };
