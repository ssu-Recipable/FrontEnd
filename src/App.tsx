import Router from "./Router";
import "./App.css";
import GlobalStyle from "@/styles/globalStyles";
import styled, { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import { theme } from "./styles/theme";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const MobileWrapper = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  background-color: white;
  padding-right: 2rem;
  padding-left: 2rem;

  max-width: var(--app-max-width, 37.5rem);
  min-height: calc(var(--vh, 1vh) * 100);
`;

const queryClient = new QueryClient();

function App() {
  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;
    const maxWidth = Math.min(37.5, windowWidth);
    document.documentElement.style.setProperty(
      "--app-max-width",
      `${maxWidth}rem`
    );
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener("resize", setScreenSize);

    return () => {
      window.removeEventListener("resize", setScreenSize);
    };
  }, []);

  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <MobileWrapper>
              <GlobalStyle />
              <Router />
            </MobileWrapper>
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
