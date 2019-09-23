import React, { FC } from "react";
import styled from "styled-components";

const DropDownContainer = styled.div`
  padding: 2rem;
  color: black;
`;

const Option = styled.div`
  padding: 2rem;
  color: black;
  width: auto;
  border: 1opx solid black;
`;

interface DropDownOption {
  title: string;
  key: string;
}

interface DropDownProps {
  isOpen: boolean;
  options: Array<DropDownOption>;
  value: DropDownOption;
  optional?: any;
}

const DropDown: FC<DropDownProps> = ({ isOpen, options, value }) => {
  return (
    <DropDownContainer>
      {isOpen ? <span>{value.title}</span> : <span>Im sdsd</span>}
      {options.map(o => {
        <Option key={o.key}>{o.title}</Option>;
      })}
    </DropDownContainer>
  );
};
export default DropDown;
