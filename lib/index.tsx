import React, { FC } from "react";
import styled from "styled-components";

const DropDownContainer = styled.div`
  padding: 2rem;
  color: black;
`;

interface DropDownProps {
  isOpen: boolean;
  optional?: any;
}

const DropDown: FC<DropDownProps> = ({ isOpen }) => (
  <DropDownContainer>
    {isOpen ? <span>I am open</span> : <span>Im closed</span>}
  </DropDownContainer>
);

const DummyComponent2 = () => <div>I am a dummy react npm module</div>;

export { DropDown, DummyComponent2 };
