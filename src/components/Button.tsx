import { css, styled } from 'styled-components';

interface ButtonProps {
    children: React.ReactNode;
}

const Button = ({children}: ButtonProps) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
export default Button;

const buttonDefaultCSS = {
    basicCss: css`
      display: flex;
  
      align-items: center;
      justify-content: center;
  
      border-radius: 3rem;
      padding: 1.6rem;
      width: 33.5rem;
      height: 5.4rem;
      letter-spacing: -0.032rem;
  
      pointer-events: auto;
    `,
  };

const Wrapper = styled.button`
    ${buttonDefaultCSS.basicCss};
`