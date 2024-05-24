import Text from "@/components/commonComponents/Text";
import styled from "styled-components"
import { Link } from "react-router-dom";
import RefrigeratorHeader from "@/components/refrigerator/RefrigeratorHeader";

const Refrigerator = () => {
    return (
        <>
            <RefrigeratorHeader />
            <Wrapper>
                <CategorySection>
                    <Category>
                        <Text font={"body1"}>야채류</Text>
                        <Text font={"body2"} color={"gray"}>상하기 쉬워요.</Text>
                        <IngredientList>
                            <Link to={`/ingredient/1`}>
                                <Ingredient>
                                    <IngredientImg src={"/src/assets/images/default_ingredients.png"}/>
                                    <Text font={"body1"}>양배추</Text>
                                    <Text font={"body2"} color={"gray"}>D-3</Text>
                                </Ingredient>
                            </Link>
                            <Ingredient>
                                <IngredientImg src={"/src/assets/images/default_ingredients.png"}/>
                                <Text font={"body1"}>오이</Text>
                                <Text font={"body2"} color={"gray"}>D-2</Text>
                            </Ingredient>
                            <Ingredient>
                                <IngredientImg src={"/src/assets/images/default_ingredients.png"}/>
                                <Text font={"body1"}>오이</Text>
                                <Text font={"body2"} color={"gray"}>D-2</Text>
                            </Ingredient>
                        </IngredientList>
                    </Category>
                    <hr style={{ border : "0.1rem solid #d8d8d8", width: "100%" }}/>
                    <Category>
                        <Text font={"body1"}>소스류</Text>
                        <Text font={"body2"} color={"gray"}>오래 두고 먹어요.</Text>
                        <IngredientList>
                            <Ingredient>
                                <IngredientImg src={"/src/assets/images/default_ingredients.png"}/>
                                <Text font={"body1"}>딸기잼</Text>
                                <Text font={"body2"} color={"gray"}>D-365</Text>
                            </Ingredient>
                        </IngredientList>
                    </Category>
                </CategorySection>

                <Link to={"/addIngredient"}>
                    <AddButton>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="white" stroke-width="2" width="40" height="40">
                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>
                    </AddButton>
                </Link>
            </Wrapper>
        </>
    );
}
export default Refrigerator;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const CategorySection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;
    margin-bottom: 12rem;
`; 

const Category = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.5rem 0;
    margin-bottom: 5rem;
`;

const IngredientList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
    margin-top: 2rem;
`;

const Ingredient = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const IngredientImg = styled.img`
    width: 4.5rem;
    height: 4.5rem;
`;

const AddButton = styled.button`
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 3rem;
    width: 8rem;
    height: 8rem;
    border-radius: 4rem;
    background: linear-gradient(#7AF4D2, #78E790)
`;