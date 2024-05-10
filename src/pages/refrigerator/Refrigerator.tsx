import Text from "@/components/commonComponents/Text";
import { useState } from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

const Refrigerator = () => {
    const [name, setName] = useState("유미라");
    return (
        <>
            <Wrapper>
                <TitleSection>
                    <Text font={"title1"}>{name}님의 냉장고</Text>
                </TitleSection>
                <hr style={{ border : "0.1rem solid #d8d8d8", width: "100%" }}/>
                
                <CategorySection>
                    <Category>
                        <Text font={"body1"}>야채류</Text>
                        <Text font={"body2"} color={"gray"}>상하기 쉬워요.</Text>
                        <IngredientList>
                            <Ingredient>
                                <IngredientImg />
                                <Text font={"body1"}>양배추</Text>
                                <Text font={"body2"} color={"gray"}>D-3</Text>
                            </Ingredient>
                            <Ingredient>
                                <IngredientImg />
                                <Text font={"body1"}>오이</Text>
                                <Text font={"body2"} color={"gray"}>D-2</Text>
                            </Ingredient>
                            <Ingredient>
                                <IngredientImg />
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
                                <IngredientImg />
                                <Text font={"body1"}>딸기잼</Text>
                                <Text font={"body2"} color={"gray"}>D-365</Text>
                            </Ingredient>
                        </IngredientList>
                    </Category>
                </CategorySection>

                <Link to={"/"}>
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

const TitleSection = styled.div`
    margin-top: 2rem;
    padding: 0.8rem;
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
    width: 45px;
    height: 45px;
    border-radius: 30px;
    background: rgba(0, 0, 0, 0.1)
`;

const AddButton = styled.button`
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 3rem;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background: linear-gradient(#7AF4D2, #78E790)
`;