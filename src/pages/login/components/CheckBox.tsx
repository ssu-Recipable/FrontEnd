import { theme } from "@/styles/theme";
import React from "react";
import styled from "styled-components";
import CheckIcon from "@/assets/svg/check.svg?react";
import Text from "@/components/commonComponents/Text";

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string | null;
}

const CheckBox = ({ id, checked, onChange, label }: CheckboxProps) => {
  return (
    <CheckboxContainer>
      <Checkbox checked={checked} htmlFor={id}>
        <HiddenCheckbox
          id={id}
          type="checkbox"
          onChange={onChange}
          checked={checked}
        />
        <CheckIcon width="5rem" height="5rem" color={theme.colors.white} />
      </Checkbox>
      {label ? (
        <Label htmlFor={id}>
          <Text font={"title4"}>{label}</Text>
        </Label>
      ) : null}
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.label<{
  checked: boolean;
}>`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border: 0.01rem solid ${theme.colors.white};
  background: ${({ checked }) =>
    checked ? `${theme.colors.green}` : `${theme.colors.grey2}`};
  border-radius: 4rem;
  cursor: pointer;

  & > svg {
    position: absolute;
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 0.01rem;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 0.01rem;
`;

const Label = styled.label`
  display: inline-block;
  line-height: 1rem;
  padding-left: 1rem;
  cursor: pointer;
`;

export default CheckBox;
