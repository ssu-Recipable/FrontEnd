import styled from "styled-components";
import Header from "./components/Header";
import Advertise from "./components/Advertise";
import { IoMenu } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import TestLogo2 from "@/assets/images/Recipable_CircleLogo.png";
import { useEffect } from "react";
import { LoadMainData, RequestUserInfo } from "@/utils/apis/UserInfoAPI";
import { useSetRecoilState } from "recoil";
import { nickNameState } from "@/recoil/atom";
import { useQuery } from "@tanstack/react-query";
import Text from "@/components/commonComponents/Text";
import { MainDataResponse } from "@/types/MainType";
import { theme } from "@/styles/theme";
import { useNavigate } from "react-router-dom";
import EmptyImg from "@/assets/images/default_ingredients.png"

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

  const showDetail = (Ingredientid: number) => {
    navigate(`/recommendedRecipes/${Ingredientid}`);
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await RequestUserInfo();
      console.log(response.data);
      setNickName(response.data.data.nickname);
    };
    getUserInfo();
  }, [setNickName]);

  const { isFetching, data } = useQuery<MainDataResponse>({
    queryKey: ["recommendrecentrecipe"],
    queryFn: LoadMainData,
  });

  if (isFetching) {
    return <Loading>잠시만 기다려주세요</Loading>;
  }

  return (
    <MainContainer>
      <Header />
      <RecommendRecipeWrapper>
        <Text font={"title1"}>{data?.data.todayRecipe.recipeName}</Text>
        <Text font={"body1"}>{data?.data.todayRecipe.introduce}</Text>
        {data?.data?.todayRecipe?.recipeImg ? (
          <RecImg
            onClick={() =>
              showDetail(data?.data.todayRecipe.recipeId as number)
            }
            src={data?.data.todayRecipe.recipeImg}
            alt="Recommend Recipe!"
          />
        ) : (
          <div style={{
            position: "relative",
            cursor: "pointer",
            width: "100%",
            height: "18rem",
            objectFit: "cover",
            borderRadius: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
          }}>
            <img src={EmptyImg} style={{width: "12rem"}}/>
            </div>
        )}
      </RecommendRecipeWrapper>
      <RecentSearchRecipeWrapper>
        <Text font={"title3"}>최근 검색한 레시피</Text>
        {data?.data.recentRecipes && data.data.recentRecipes.length > 0 ? (
          <RecipeWrapper>
            {data.data.recentRecipes.map((data) => (
              <RecipeBoxWrapper
                key={data.recipeId}
                onClick={() => showDetail(data.recipeId as number)}
              >
                <div style={{ position: "relative" }}>
                {data.recipeImg? <RecipeImg src={data.recipeImg} alt="menu image" />
                  : <div style={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "cover",
                    borderRadius: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                    <img src={EmptyImg} style={{width: "5rem"}}/>
                    </div>}
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Text font={"body1"}>
                    {data.recipeName.length > 9
                      ? `${data.recipeName.slice(0, 9)}...`
                      : data.recipeName}
                  </Text>
                </div>
              </RecipeBoxWrapper>
            ))}
          </RecipeWrapper>
        ) : (
          <EmptyWrapper>
            <Text font={"title4"}>최근 검색한 레시피가 없습니다.</Text>
            <Text font={"body2"}>
              식재료를 등록하고 레시피를 추천 받아보세요!
            </Text>
          </EmptyWrapper>
        )}
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
  margin-top: 1.3rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid ${theme.colors.grey2};
`;

const RecImg = styled.img`
  position: relative;
  cursor: pointer;
  object-fit: contain;
  width: 100%;
  height: 18rem;
  background-color: rgba(224, 224, 224, 0.2);
  &:hover {
    transform: scale(1.01);
  }
  object-fit: cover;
  margin-top: 1rem;
  border-radius: 1rem;
`;

/**
const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s;
  border-radius: 1rem;

  &:hover {
    opacity: 0.8;
  }
`;

const HoverText = styled.p`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 0.5rem;
  color: ${theme.colors.white};
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s;
  font-weight: 200;

  ${HoverOverlay}:hover & {
    opacity: 1;
  }
`;
*/

const RecentSearchRecipeWrapper = styled.section`
  margin-top: 1.2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${theme.colors.grey2};
`;

const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  gap: 1.7rem;
  margin-top: 1rem;
`;

const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10rem;
`;

const RecipeBoxWrapper = styled.div`
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;

const RecipeImg = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 1rem;
`;

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 37.5rem;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: ${theme.colors.grey2};
  opacity: 0.3;
`;

const FooterWrapper = styled.footer`
  position: fixed;
  width: 33.5rem;
  height: 8rem;
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
  margin-bottom: 3rem;
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
