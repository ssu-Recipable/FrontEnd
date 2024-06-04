import styled from "styled-components";
import Text from "@/components/commonComponents/Text";
import Button from "@/components/commonComponents/Button";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ingredientsState, nickNameState } from "@/recoil/atom";
import { useEffect, useState } from "react";
import { callChatGPT } from "@/utils/chatGPTUtil";
import type { Recipe } from "@/types/RecipeType";
import { GetRecipeImgApi } from "@/utils/apis/RecipeApi";
import SkeletonRecipes from "./SkeletonRecipes";

const RecommendedRecipes = () => {
    const name = useRecoilValue(nickNameState);
    const ingredients = useRecoilValue(ingredientsState);

    const navigate = useNavigate();

    const [recipes, setRecipes] = useState<Recipe[] | null>(null);


    const parseRecipes = (text: string): Recipe[] => {
        const recipes: Recipe[] = [];
        const lines = text.split('\n');
        lines.forEach(line => {
            const parts = line.split(':');
            if (parts.length === 2) {
                const recipeName = parts[0].replace(/^\d+\.\s*/, '').trim();
                const introduce = parts[1].trim();
                recipes.push({ recipeName, introduce });
            }
        });
        return recipes
    }

    const fetchRecipes = async () => {
        try {
            const res = await callChatGPT(`요리 3가지 추천해줘. 형식은 숫자. 요리이름: 한줄설명. 다른 문장은 출력하지마.`);
            console.log("call chatGPT!")
            if (res !== null) {
                const parsedRecipes = parseRecipes(res);
                const recipesWithImg = await Promise.all(parsedRecipes.map(async (recipe) => {
                    const url = await GetRecipeImgApi(recipe.recipeName);
                    return {
                        ...recipe,
                        recipeImg: url
                    }
                }))
                setRecipes(recipesWithImg);
                sessionStorage.setItem('recipes', JSON.stringify(recipesWithImg));
            }
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    useEffect(() => {
        const storedRecipes = sessionStorage.getItem('recipes');
        if (storedRecipes) {
            setRecipes(JSON.parse(storedRecipes));
        } else {
            fetchRecipes();
        }
    }, []);

    useEffect(() => {
        if(ingredients.length === 0){
            navigate('/chooseIngredients');
        }
    }, [ingredients]);

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
                            {recipes? recipes.map((recipe, index) => (
                                <>
                                <Link to={`/recommendedRecipes/${index}`}>
                                <Recipe>
                                    <RecipeImg src={recipe.recipeImg} />
                                    <RecipeInfo>
                                        <div>
                                            <div style={{fontSize: "1.2rem", fontWeight: "700"}}>{recipe.recipeName}</div>
                                        </div>
                                        <div>
                                            <div style={{color: "rgba(0,0,0,0.5)", lineHeight: "1.4"}}>{recipe.introduce}</div>
                                        </div>
                                    </RecipeInfo>   
                                </Recipe>
                            </Link>
    
                            </>
                            )): <SkeletonRecipes />}
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
    padding: 0 1rem;
    width: 100%;
    margin-bottom: 4rem;
`;

const RecipesList = styled.div`
    
`;

const Recipe = styled.div`
    display: flex;
    margin: 1.5rem 0;
    gap: 2rem;
    align-items: center;
`;

const RecipeImg = styled.img`
    width: 12rem;
    height: 9rem;
    object-fit: cover;
    border-radius: 0.8rem;
`;

const RecipeInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 17rem;
    gap: 1rem;
`;

const ButtonSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 5rem;
`;