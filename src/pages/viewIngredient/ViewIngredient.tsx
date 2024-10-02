import Text from "@/components/commonComponents/Text";
import RefrigeratorHeader from "@/components/refrigerator/RefrigeratorHeader";
import styled from "styled-components";
import Button from "@/components/commonComponents/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  DeleteIngridientApi,
  ViewIngredientApi,
} from "@/utils/apis/IngredientApi";
import DefaultIngredientImg from "@/assets/images/default_ingredients.png";

const ViewIngredient = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["ingredient", id],
    queryFn: () => (id ? ViewIngredientApi(id) : null),
  });
  const navigate = useNavigate();

  console.log(data);

  const deleteIngredient = async () => {
    if (!id) {
      return;
    }

    const confirmDelete = window.confirm("정말로 삭제하시겠습니까?");
    if (!confirmDelete) {
      return;
    }

    await DeleteIngridientApi(id);

    navigate("/refrigerator");
  };

  return (
    <>
      <RefrigeratorHeader />
      <Wrapper>
        {data?.ingredientImage === null ? (
          <DefaultImg src={DefaultIngredientImg} />
        ) : (
          <IngredientImg src={data?.ingredientImage} />
        )}
        <InfoSection>
          <Info>
            <Text font={"title3"}>이름</Text>
            <Text font={"body1"}>{data?.ingredientName}</Text>
          </Info>
          <Info>
            <Text font={"title3"}>카테고리</Text>
            <Text font={"body1"}>{data?.categoryName}</Text>
          </Info>
          <Info>
            <Text font={"title3"}>소비기한</Text>
            <Text font={"body1"}>{data?.expirationDay}</Text>
          </Info>
          <Info>
            <Text font={"title3"}>메모</Text>
            <Text font={"body1"}>{data?.memo}</Text>
          </Info>
        </InfoSection>
        <ButtonSection>
          <Link to={`/editIngredient/${id}`}>
            <Button typeState={"completeBtn"}>
              <Text font={"button2"}>재료 수정하기</Text>
            </Button>
          </Link>
          <Button typeState={"disproveBtn"} onClick={deleteIngredient}>
            <Text font={"button2"}>재료 삭제하기</Text>
          </Button>
        </ButtonSection>
      </Wrapper>
    </>
  );
};
export default ViewIngredient;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const DefaultImg = styled.img`
  width: 10rem;
  height: 10rem;
  margin: 5rem 0;
`;

const IngredientImg = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 5rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  margin: 5rem 0;
  object-fit: cover;
`;

const InfoSection = styled.div`
  width: 100%;
  padding: 0 4rem;
  margin-bottom: 3rem;
`;

const Info = styled.div`
  margin-bottom: 2rem;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
`;
