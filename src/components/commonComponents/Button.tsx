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
  completeBtn: css`
    ${buttonDefaultCSS.basicCss};
    background-color: ${({ theme }) => theme.colors.main1};
    color: ${({ theme }) => theme.colors.black};
  `,
  disproveBtn: css`
    ${buttonDefaultCSS.basicCss};
    background-color: ${({ theme }) => theme.colors.main2};
    color: ${({ theme }) => theme.colors.black};
  `,
  confirmBtn: css`
    ${buttonDefaultCSS.basicCss};
    background-color: ${({ theme }) => theme.colors.main1};
    color: ${({ theme }) => theme.colors.black};
    width: 4.7rem;
    height: 2rem;
    padding: 1.2rem;
  `,
};

const Wrapper = styled.button<{ $type: string }>`
  ${({ $type }) => {
    switch ($type) {
      //재료 선택, 수정, 레시피 추천 버튼 등
      case "completeBtn":
        return buttonCSS.completeBtn;
      //추천 그만두기, 재료 삭제 버튼 등
      case "disproveBtn":
        return buttonCSS.disproveBtn;
      //확인 버튼
      case "confirmBtn":
        return buttonCSS.confirmBtn;
      default:
    }
  }}
`;
