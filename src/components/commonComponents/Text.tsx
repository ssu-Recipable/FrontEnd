import React from "react";
import styled from "styled-components";

type ValueProps = {
  children: React.ReactNode;
  font: string;
  color?: string;
};

const Text = ({ children, font, color }: ValueProps) => {
  return (
    <Wrapper $font={font} $color={color || "defaultColor"}>
      {children}
    </Wrapper>
  );
};

export default Text;

const Wrapper = styled.span<{ $font: string; $color: string }>`
  display: flex;
  align-items: center;
  color: ${({ $color }) => $color};
  ${({ $font, theme }) => {
    switch ($font) {
      case "head1":
        return theme.fonts.head1;
      case "head2":
        return theme.fonts.head2;
      case "title1":
        return theme.fonts.title1;
      case "title2":
        return theme.fonts.title2;
      case "title3":
        return theme.fonts.title3;
      case "title4":
        return theme.fonts.title4;
      case "title5":
        return theme.fonts.title5;
      case "body1":
        return theme.fonts.body1;
      case "body2":
        return theme.fonts.body2;
      case "button1":
        return theme.fonts.button1;
      case "button2":
        return theme.fonts.button2;
      default:
        return "";
    }
  }}
`;
