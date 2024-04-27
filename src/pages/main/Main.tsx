import styled from "styled-components";
import Header from "./components/Header";
import RecommendRecipe from "./components/RecommendRecipe";
import RecentSearchRecipe from "./components/RecentSearchRecipe";
import Advertise from "./components/Advertise";
import Footer from "./components/Footer";

const Main = () => {
  return (
    <MainContainer>
      <Header />
      <RecommendRecipe />
      <RecentSearchRecipe />
      <Advertise />
      <Footer />
    </MainContainer>
  );
};

const MainContainer = styled.main`
  width: 100%;
`;

export default Main;
