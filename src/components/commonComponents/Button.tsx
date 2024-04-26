import { css, styled } from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  typeState: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, typeState, onClick }: ButtonProps) => {
  return (
    <Wrapper $type={typeState} onClick={onClick}>
      {children}
    </Wrapper>
  );
};
export default Button;

const buttonDefaultCSS = {
  basicCss: css`
    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 2.5rem;
    padding: 1.6rem;
    width: 33.5rem;
    height: 5.4rem;
    letter-spacing: -0.032rem;

    pointer-events: auto;
  `,
};

const buttonCSS = {
  confirmBtn: css`
    ${buttonDefaultCSS.basicCss};
    background-color: ${({ theme }) => theme.colors.main1};
    color: ${({ theme }) => theme.colors.black};
  `,
  disproveBtn: css`
    ${buttonDefaultCSS.basicCss};
    background-color: ${({ theme }) => theme.colors.main2};
    color: ${({ theme }) => theme.colors.black};
  `,
};

const Wrapper = styled.button<{ $type: string }>`
  ${({ $type }) => {
    switch ($type) {
      case "confirmBtn":
        return buttonCSS.confirmBtn;
      case "disproveBtn":
        return buttonCSS.disproveBtn;
      default:
        return "";
    }
  }}
`;
