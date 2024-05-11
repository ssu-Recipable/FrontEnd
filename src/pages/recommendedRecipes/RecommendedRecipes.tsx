import styled from "styled-components";
import Text from "@/components/commonComponents/Text";
import { useState } from "react";
import Button from "@/components/commonComponents/Button";
import { Link } from "react-router-dom";

const RecommendedRecipes = () => {
    const [name, setName] = useState("유미라");
    return (
        <>
            <Wrapper>
                <TitleSection>
                    <Text font={"title1"}>{name}님을 위한 추천 레시피</Text>
                </TitleSection>
                <RecipesSection>
                    <Item>
                        <div style={{marginBottom: "2rem"}}>
                            <Text font={"title3"}>chatGPT 셰프의 추천 레시피</Text>
                        </div>
                        <RecipesList>
                            <Link to={"/recommended/1"}>
                                <Recipe>
                                    <img style={{width: "10.5rem", height: "8rem", background:"rgba(0, 0, 0, 0.1)"}}/>
                                    <RecipeInfo>
                                        <Text font={"body1"}>김치찌개</Text>
                                        <Text font={"body2"}>한국의 전통 맛을 담은 김치찌개</Text>
                                    </RecipeInfo>   
                                </Recipe>
                            </Link>
                            <hr style={{ border : "0.1rem solid #d8d8d8", width: "100%" }}/>
                            <Recipe>
                                <img style={{width: "10.5rem", height: "8rem", background:"rgba(0, 0, 0, 0.1)"}}/>
                                <RecipeInfo>
                                    <Text font={"body1"}>김치찌개</Text>
                                    <Text font={"body2"}>한국의 전통 맛을 담은 김치찌개</Text>
                                </RecipeInfo>   
                            </Recipe>
                            <hr style={{ border : "0.1rem solid #d8d8d8", width: "100%" }}/>
                            <Recipe>
                                <img style={{width: "10.5rem", height: "8rem", background:"rgba(0, 0, 0, 0.1)"}}/>
                                <RecipeInfo>
                                    <Text font={"body1"}>김치찌개</Text>
                                    <Text font={"body2"}>한국의 전통 맛을 담은 김치찌개</Text>
                                </RecipeInfo>   
                            </Recipe>
                        </RecipesList>
                    </Item>
                    <Item>
                        <div style={{marginBottom: "2rem"}}>
                            <Text font={"title3"}>Gemini 셰프의 추천 레시피</Text>
                        </div>
                        <RecipesList>
                            <Recipe>
                                <img style={{width: "10.5rem", height: "8rem", background:"rgba(0, 0, 0, 0.1)"}}/>
                                <RecipeInfo>
                                    <Text font={"body1"}>김치찌개</Text>
                                    <Text font={"body2"}>한국의 전통 맛을 담은 김치찌개</Text>
                                </RecipeInfo>   
                            </Recipe>
                            <hr style={{ border : "0.1rem solid #d8d8d8", width: "100%" }}/>
                            <Recipe>
                                <img style={{width: "10.5rem", height: "8rem", background:"rgba(0, 0, 0, 0.1)"}}/>
                                <RecipeInfo>
                                    <Text font={"body1"}>김치찌개</Text>
                                    <Text font={"body2"}>한국의 전통 맛을 담은 김치찌개</Text>
                                </RecipeInfo>   
                            </Recipe>
                            <hr style={{ border : "0.1rem solid #d8d8d8", width: "100%" }}/>
                            <Recipe>
                                <img style={{width: "10.5rem", height: "8rem", background:"rgba(0, 0, 0, 0.1)"}}/>
                                <RecipeInfo>
                                    <Text font={"body1"}>김치찌개</Text>
                                    <Text font={"body2"}>한국의 전통 맛을 담은 김치찌개</Text>
                                </RecipeInfo>   
                            </Recipe>
                        </RecipesList>
                    </Item>
                </RecipesSection>
                <ButtonSection>
                    <Button typeState={"completeBtn"}>다른 레시피를 알고 싶어요</Button>
                    <Button typeState={"disproveBtn"}>레시피 추천 그만두기</Button>
                </ButtonSection>
            </Wrapper>
        </>
    );
}
export default RecommendedRecipes;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const TitleSection = styled.div`
    margin-top: 7rem;
    margin-bottom: 3rem;
    margin-left: 2rem;
    width: 100%;  
`;

const RecipesSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Item = styled.div`
    padding: 0 1.5rem;
    width: 100%;
    margin-bottom: 3rem;
`;

const RecipesList = styled.div`
    
`;

const Recipe = styled.div`
    display: flex;
    margin: 1rem 0;
    gap: 2rem;
    align-items: center;
`;

const RecipeInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 5rem;
    gap: 1rem;
`;

const ButtonSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 5rem;
`;