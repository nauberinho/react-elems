import styled, { keyframes } from "styled-components";

// Animations
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
        height: auto;
      }
      100% {
        opacity: 1;
        height: auto;
      }`
};

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

const mediaQueries = {
  mobileS: limit => `(${limit}-width: ${mqSizes.mobileS})`,
  mobileM: limit => `(${limit}-width: ${mqSizes.mobileM})`,
  mobileL: limit => `(${limit}-width: ${mqSizes.mobileL})`,
  tablet: limit => `(${limit}-width: ${mqSizes.tablet})`,
  laptop: limit => `(${limit}-width: ${mqSizes.laptop})`,
  laptopL: limit => `(${limit}-width: ${mqSizes.laptopL})`,
  desktop: limit => `(${limit}-width: ${mqSizes.desktop})`,
  desktopL: limit => `(${limit}-width: ${mqSizes.desktop})`
};

// Colors
const colors = {
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

export { animations, mediaQueries, colors };
