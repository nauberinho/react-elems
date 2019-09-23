import React, { FC } from "react";
import styled from "styled-components";
import { animations } from "../../theme";

const DropDownContainer = styled.div`
  padding: 2rem;
  color: black;
`;

interface OptionContainerProps {
  isOpen: any;
}

const OptionsContainer = styled.div<OptionContainerProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  animation: ${animations.fadeInAndExpand} 2s ease;
  height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
`;

interface OptionProps {
  isActive: any;
}

const Option = styled.div<OptionProps>`
  padding: 2rem;
  color: ${({ isActive }) => (isActive ? "green" : "black")};
  width: auto;
  border: 1px solid black;
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
  onToggle(): any;
  onChange(): any;
}

const DropDown: FC<DropDownProps> = ({
  isOpen,
  options,
  onToggle,
  onChange,
  value
}) => {
  return (
    <DropDownContainer>
      <span onClick={onToggle}>{value.title}</span>
      <OptionsContainer isOpen={isOpen}>
        {options.map(o => {
          return (
            <Option
              onClick={() => onChange(o)}
              isActive={value.key === o.key}
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
