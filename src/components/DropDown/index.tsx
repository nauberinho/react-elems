import React, { FC } from "react";
import styled from "styled-components";
import { animations } from "../../theme";

import SvgDropDownArrow from "../../Icons/DropDownArrow";

const DropDownContainer = styled.div`
  color: black;
  border: 2px solid lightgray;
  border-radius: 5px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

interface OptionContainerProps {
  isOpen: any;
}

const DropDownValue = styled.div`
  padding: 2rem 1rem;
  cursor: pointer;
`;

const ArrowWrapper = styled.div`
  background-size: 20px 30px;
`;

const OptionsContainer = styled.div<OptionContainerProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  animation: ${animations.fadeInAndExpand} 0.5s ease;
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  overflow: hidden;
`;

interface OptionProps {
  isActive: any;
}

const Option = styled.div<OptionProps>`
  padding: 2rem 1rem;
  color: ${({ isActive }) => (isActive ? "green" : "black")};
  width: auto;
  border-top: 1px solid lightgray;
  cursor: pointer;
`;

// Interfaces
interface DropDownOption {
  title: string;
  key: string;
}

interface DropDownProps {
  isOpen: boolean;
  options: Array<DropDownOption>;
  value: DropDownOption;
  optional?: any;
  placeholder?: string;
  onToggle(): any;
  onChange: (option: Object) => void;
}

const DropDown: FC<DropDownProps> = ({
  isOpen,
  options,
  placeholder,
  onToggle,
  onChange,
  value
}) => {
  return (
    <DropDownContainer>
      <DropDownValue onClick={onToggle}>
        {value && value.title}
        {placeholder && !value && placeholder}
        {!value && !placeholder && options[0].title}
        {/* <ArrowWrapper>
          <img src={SvgDropDownArrow} />
        </ArrowWrapper> */}
      </DropDownValue>
      <OptionsContainer isOpen={isOpen}>
        {options.map(o => {
          return (
            <Option
              onClick={() => onChange(o)}
              isActive={value && value.key === o.key}
              key={o.key}
            >
              {o.title}
            </Option>
          );
        })}
      </OptionsContainer>
    </DropDownContainer>
  );
};
export default DropDown;
