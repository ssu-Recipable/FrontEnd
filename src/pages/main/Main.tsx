import styled from "styled-components";
import Header from "./components/Header";
import RecommendRecipe from "./components/RecommendRecipe";

const Main = () => {
  return (
    <MainContainer>
      <Header />
      <RecommendRecipe />
      <section></section>
      <footer></footer>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  width: 100%;
`;

export default Main;
