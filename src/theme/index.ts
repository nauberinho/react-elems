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
        max-height: 0;
      }
      100% {
        opacity: 1;
        max-height: 1000px;
      }`
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

export { animations, colors };
