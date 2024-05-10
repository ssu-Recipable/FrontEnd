import Text from "@/components/commonComponents/Text";
import RefrigeratorHeader from "@/components/refrigerator/RefrigeratorHeader";
import styled from "styled-components";
import Button from "@/components/commonComponents/Button";

const ViewIngredient = () => {
    return (
        <>
            <RefrigeratorHeader />
            <Wrapper>
                <IngredientImg />
                <InfoSection>
                    <Info>
                        <Text font={"title4"}>이름</Text>
                        <Text font={"body1"}>양배추</Text>
                    </Info>
                    <Info>
                        <Text font={"title4"}>카테고리</Text>
                        <Text font={"body1"}>야채류</Text>
                    </Info>
                    <Info>
                        <Text font={"title4"}>소비기한</Text>
                        <Text font={"body1"}>2024-04-01</Text>
                    </Info>
                    <Info>
                        <Text font={"title4"}>메모</Text>
                        <Text font={"body1"}>야채칸에 있음!</Text>
                    </Info>
                </InfoSection>
                <ButtonSection>
                    <Button typeState={"completeBtn"}>재료 수정하기</Button>
                    <Button typeState={"disproveBtn"}>재료 삭제하기</Button>
                </ButtonSection>
            </Wrapper>
        </>
    );
}
export default ViewIngredient;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const IngredientImg = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 5rem;
    background: rgba(0, 0, 0, 0.1);
    margin: 5rem 0;
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
`;



