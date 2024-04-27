import Text from "@/components/commonComponents/Text";
import styled from "styled-components";
import RecipeBox from "./RecipeBox";
import { theme } from "@/styles/theme";

const RecentSearchRecipe = () => {
  return (
    <RecentSearchRecipeWrapper>
      <Text font={"title3"}>최근 검색된 레시피</Text>
      <RecipeWrapper>
        <RecipeBox />
        <RecipeBox />
        <RecipeBox />
      </RecipeWrapper>
    </RecentSearchRecipeWrapper>
  );
};

const RecentSearchRecipeWrapper = styled.section`
  margin-top: 1.2rem;
  border-bottom: 1px solid ${theme.colors.grey2};
`;
const RecipeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  margin-top: 1rem;
`;

export default RecentSearchRecipe;
