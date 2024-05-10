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

    border-radius: 0.5rem;
    padding: 1.6rem;
    width: 25rem;
    height: 4rem;
    letter-spacing: -0.032rem;

    pointer-events: auto;
  `,
};

const buttonCSS = {
  completeBtn: css`
    ${buttonDefaultCSS.basicCss};
    background-color: ${({ theme }) => theme.colors.main1};
    color: ${({ theme }) => theme.colors.black};
    border-radius: 2rem;
  `,
  disproveBtn: css`
    ${buttonDefaultCSS.basicCss};
    background-color: ${({ theme }) => theme.colors.main2};
    color: ${({ theme }) => theme.colors.black};
    border-radius: 2rem;
  `,
  confirmBtn: css`
    ${buttonDefaultCSS.basicCss};
    background-color: ${({ theme }) => theme.colors.main2};
    color: ${({ theme }) => theme.colors.black};
    width: 4.7rem;
    height: 2rem;
    padding: 1.2rem;
  `,
  defaultBtn: css`
    ${buttonDefaultCSS.basicCss};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    border: 0.1rem solid ${({ theme }) => theme.colors.grey2};
  `,
  disabledBtn: css`
    ${buttonDefaultCSS.basicCss};
    background-color: ${({ theme }) => theme.colors.grey1};
    color: ${({ theme }) => theme.colors.black};
    border-radius: 1.3rem;
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
      //로그인, 로그아웃, 프로필 수정 버튼 등
      case "defaultBtn":
        return buttonCSS.defaultBtn;
      case "disabledBtn":
        return buttonCSS.disabledBtn;
      default:
    }
  }};
`;
