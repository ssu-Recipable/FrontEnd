import Text from "@/components/commonComponents/Text";
import { theme } from "@/styles/theme";
import styled from "styled-components";
import TestImg from "@/assets/images/test_food_image.jpeg";

const RecommendRecipe = () => {
  return (
    <RecommendRecipeWrapper>
      <Text font={"title2"}>오늘의 추천 레시피</Text>
      <Text font={"title1"}>김치찌개</Text>
      <Text font={"body1"} color={theme.colors.grey1}>
        한국의 정통 맛을 담은 김치찌개!
      </Text>
      <RecImg src={TestImg} alt="Recommend Recipe!" />
    </RecommendRecipeWrapper>
  );
};

const RecommendRecipeWrapper = styled.section`
  margin-top: 1.2rem;
`;

const RecImg = styled.img`
  width: 100%;
  height: 18rem;
`;

export default RecommendRecipe;
