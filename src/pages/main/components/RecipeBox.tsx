import TestLogo from "@/assets/images/test_food_image2.jpeg";
import Text from "@/components/commonComponents/Text";
import styled from "styled-components";

const RecipeBox = () => {
  const detail =
    " 프렌치 토스트를 만들기 위해서는 먼저 달걀, 우유 또는 크림, 박력분을 섞은 버터 또는 식용유를 담근 그릇에서 풀어줍니다. 그런 다음, 식빵 조각을 이 혼합물에 담궈 흠뻑 적셔줍니다. 담근 식빵은 팬에 놓고 양쪽 면이 골고루 구워질 때까지 조리됩니다.";
  const processedName =
    detail.length > 15 ? `${detail.slice(0, 12)}...` : detail;

  return (
    <RecipeBoxWrapper>
      <RecipeImg src={TestLogo} alt="menu image" />
      <Text font={"title4"}>프렌치 토스트</Text>
      <Text font={"body2"}>{processedName}</Text>
    </RecipeBoxWrapper>
  );
};

const RecipeBoxWrapper = styled.div`
  margin-bottom: 3rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const RecipeImg = styled.img`
  width: 10rem;
`;

export default RecipeBox;
