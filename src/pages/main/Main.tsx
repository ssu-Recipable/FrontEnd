import styled from "styled-components";
import Header from "./components/Header";
import RecommendRecipe from "./components/RecommendRecipe";
import RecentSearchRecipe from "./components/RecentSearchRecipe";
import Advertise from "./components/Advertise";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { RequestUserInfo } from "@/utils/apis/UserInfoAPI";
import { useSetRecoilState } from "recoil";
import { nickNameState } from "@/recoil/atom";

const Main = () => {
  const setNickName = useSetRecoilState(nickNameState);
  useEffect(() => {
    const getUserInfo = async () => {
      const response = await RequestUserInfo();
      console.log(response.data);
      setNickName(response.data.data.nickname);
    };

    getUserInfo();
  }, [setNickName]);
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
