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
  margin-top: 5rem;
`;

const TitleSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border-bottom: 0.1rem solid ${theme.colors.grey2};
  box-shadow: 0.1rem 0.1rem 0.1rem ${theme.colors.grey1};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin-bottom: 1rem;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.25),
      0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.22);
  }
`;

const RecipeImg = styled.img`
  width: 10rem;
  height: 8rem;
`;

const TextSection = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10rem;
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
