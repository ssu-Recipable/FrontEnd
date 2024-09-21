import Text from "@/components/commonComponents/Text";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { BookMarkResponse } from "@/types/BookMarkType";
import { GetBookMarkApi } from "@/utils/apis/BookMarkApi";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const BookMark = () => {
  const { isFetching, data } = useQuery<BookMarkResponse>({
    queryKey: ["getbookmark"],
    queryFn: GetBookMarkApi,
  });

  const navigate = useNavigate();

  const movePreviousPage = () => {
    navigate(-1);
  };

  if (isFetching) {
    return <Loading>잠시만 기다려주세요</Loading>;
  }

  const showRecipeDetail = (recipeId: number) => {
    navigate(`/recommendedRecipes/${recipeId}`);
  };
  return (
    <BookMarkContainer>
      <TitleSection>
        <MoveBack onClick={movePreviousPage}>
          <IoIosArrowBack size={20} />
        </MoveBack>
        <Text font={"title1"}>북마크한 레시피</Text>
      </TitleSection>
      {data?.data && data.data.length > 0 ? (
        data.data.map((item) => (
          <BookMarkBox
            key={item.recipeId}
            onClick={() => showRecipeDetail(item.recipeId)}
          >
            <RecipeImg src={item.recipeImg} alt="Recipe Image" />
            <TextSection>
              <Text font={"title4"}>{item.recipeName}</Text>
              <Text font={"body2"} color={theme.colors.grey1}>
                {item.introduce}
              </Text>
            </TextSection>

          </BookMarkBox>
        ))
      ) : (
        <EmptyWrapper>
          <Text font={"title4"}>북마크에 등록된 레시피가 없습니다🥲</Text>
          <Text font={"body2"}>
            저장하고 싶은 레시피를 북마크에 추가해보세요!
          </Text>
        </EmptyWrapper>
      )}
    </BookMarkContainer>
  );
};

const BookMarkContainer = styled.div`
  margin: 1rem 0;
  width: 100%;
`;

const TitleSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

const MoveBack = styled.span`
  cursor: pointer;
  position: absolute;
  left: 0;
  bottom: 0.6rem;
`;

const BookMarkBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 
  margin-bottom: 1.5rem;
  cursor: pointer;
  padding: 0 1rem;
`;

const RecipeImg = styled.img`
  width: 10rem;
  height: 8rem;
  border-radius: 1rem;
  object-fit: cover;
`;

const TextSection = styled.div`
  width: 24rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1.5rem;
`;

const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 25rem; 
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

export default BookMark;
