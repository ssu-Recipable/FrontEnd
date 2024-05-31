import Text from "@/components/commonComponents/Text";
import { theme } from "@/styles/theme";
import { BookMarkResponse, GetBookMarkApi } from "@/utils/apis/BookMarkApi";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import styled from "styled-components";

const BookMark = () => {
  const { isFetching, data } = useQuery<BookMarkResponse>({
    queryKey: ["getbookmark"],
    queryFn: GetBookMarkApi,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isFetching) {
    return <Loading>잠시만 기다려주세요</Loading>;
  }

  return (
    <BookMarkContainer>
      <Text font={"title1"}>북마크한 레시피</Text>
    </BookMarkContainer>
  );
};

const BookMarkContainer = styled.div`
  margin-top: 5rem;
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
