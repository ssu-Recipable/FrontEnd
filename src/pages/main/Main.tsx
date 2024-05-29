import styled from "styled-components";
import Header from "./components/Header";
import Advertise from "./components/Advertise";
import TestImg from "@/assets/images/test_food_image.jpeg";
import { IoMenu } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import TestLogo2 from "@/assets/images/Recipable_Logo1.png";
import { useEffect } from "react";
import { LoadMainData, RequestUserInfo } from "@/utils/apis/UserInfoAPI";
import { useSetRecoilState } from "recoil";
import { nickNameState } from "@/recoil/atom";
// import { useQuery } from "@tanstack/react-query";
import Text from "@/components/commonComponents/Text";
// import { MainDataResponse } from "@/types/MainType";
import { theme } from "@/styles/theme";
import RecipeBox from "./components/RecipeBox";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const setNickName = useSetRecoilState(nickNameState);
  const navigate = useNavigate();

  const gotoRefrigerator = () => {
    navigate("/refrigerator");
  };

  const gotoBookMark = () => {
    navigate("/bookmark");
  };

  const chooseIngredients = () => {
    navigate("/chooseIngredients");
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await RequestUserInfo();
      console.log(response.data);
      setNickName(response.data.data.nickname);
    };
    getUserInfo();
  }, [setNickName]);

  // const { isFetching, data } = useQuery<MainDataResponse>({
  //   queryKey: ["recommendrecentrecipe"],
  //   queryFn: LoadMainData,
  // });

  // if (isFetching) {
  //   return <Loading>잠시만 기다려주세요</Loading>;
  // }

  return (
    <MainContainer>
      <Header />
      <RecommendRecipeWrapper>
        {/* <Text font={"title2"}>오늘의 추천 레시피</Text>
        <Text font={"title1"}>{data?.data.todayRecipe.recipeName}</Text>
        <Text font={"body1"} color={theme.colors.grey1}>
          {data?.data.todayRecipe.introduce}
        </Text> */}

        <Text font={"title2"}>오늘의 추천 레시피</Text>
        <Text font={"title1"}>김치찌개</Text>
        <Text font={"body1"} color={theme.colors.grey1}>
          김치를 넣고 끓인 김치찌개
        </Text>
        <RecImg src={TestImg} alt="Recommend Recipe!" />
      </RecommendRecipeWrapper>
      <RecentSearchRecipeWrapper>
        <Text font={"title3"}>최근 검색된 레시피</Text>
        <RecipeWrapper>
          <RecipeBox />
          <RecipeBox />
          <RecipeBox />
          <RecipeBox />
          <RecipeBox />
          <RecipeBox />
          <RecipeBox />
          <RecipeBox />
          <RecipeBox />
        </RecipeWrapper>
      </RecentSearchRecipeWrapper>
      <Advertise />
      <FooterWrapper>
        <SubMenuBox onClick={gotoRefrigerator}>
          <IoMenu size={25} />
          <Text font={"title4"}>냉장고</Text>
        </SubMenuBox>
        <LogoBox onClick={chooseIngredients}>
          <img src={TestLogo2} alt="Logo" />
        </LogoBox>
        <SubMenuBox onClick={gotoBookMark}>
          <FaStar size={20} />
          <Text font={"title4"}>북마크</Text>
        </SubMenuBox>
      </FooterWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  position: relative;
  width: 100%;
`;

const RecommendRecipeWrapper = styled.section`
  margin-top: 1.2rem;
`;

const RecImg = styled.img`
  width: 100%;
  height: 18rem;
`;

const RecentSearchRecipeWrapper = styled.section`
  margin-top: 1.2rem;
  border-bottom: 1px solid ${theme.colors.grey2};
`;
const RecipeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 10rem);
  gap: 1rem;
  margin-top: 1rem;
`;

// const Loading = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 37.5rem;
//   height: 100vh;
//   position: fixed;
//   top: 0;
//   z-index: 9999;
//   background-color: ${theme.colors.grey2};
//   opacity: 0.3;
// `;

const FooterWrapper = styled.footer`
  position: fixed;
  width: 33.5rem;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid ${theme.colors.grey2};
  background-color: ${theme.colors.white};
`;

const SubMenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const LogoBox = styled.div`
  cursor: pointer;
  border-radius: 70rem;
  overflow: hidden;

  img {
    width: 9rem;
    height: 9rem;
    object-fit: cover;
    transition: transform 0.5s ease;
    &:hover {
      transform: rotate(45deg) scale(1.05);
    }
  }
`;

export default Main;
