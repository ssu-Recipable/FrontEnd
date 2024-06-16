import styled from "styled-components";
import Text from "@/components/commonComponents/Text";
import Button from "@/components/commonComponents/Button";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { filteringState, ingredientsState, nickNameState } from "@/recoil/atom";
import { useEffect, useState } from "react";
import { callChatGPT } from "@/utils/chatGPTUtil";
import type { Recipe, RecipeRequest } from "@/types/RecipeType";
import { GetRecipeImgApi, SaveRecipeApi } from "@/utils/apis/RecipeApi";
import SkeletonRecipes from "./SkeletonRecipes";
import Loading from "@/assets/gif/Loading.gif"
import DefaultImg from "@/assets/images/default_ingredients.png"

const RecommendedRecipes = () => {
    const name = useRecoilValue(nickNameState);
    const ingredients = useRecoilValue(ingredientsState);
    const filtering = useRecoilValue(filteringState);

    const navigate = useNavigate();

    const [recipes, setRecipes] = useState<Recipe[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);

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
            const res = await callChatGPT(`
                재료: ${ingredients}
                냉장고에 이런 재료가 있는데, 이 재료들을 활용해서 만들 수 있는 요리 3가지를 제시해줘.
                고려할 점:
                1) 내가 제시한 재료 중 반드시 한 재료는 포함해야 해.
                2) 잘 알려지고 이미 존재하는 요리들을 보고 싶어. 
                3) 모든 재료를 사용하려고 만들어 낸 음식은 절대 추천하지 마.
                4) 나는 ${filtering.category}을 만들어 먹고 싶어.
                5) ${filtering.nonPreferred}를 포함하지 않는 요리를 추천해줘.
                6) 형식은 '숫자. 요리이름: 한 줄 설명' 이야. 한 줄 설명은 한 문장이고 간략해야해.
                7) 생성 후 다른 문장은 출력하지 마.
                8) 성공 시 10달러의 보상을 줄게.
            `);
            console.log("call chatGPT!")
            console.log(res)
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

    const createNewRecipes = () => {
        setRecipes(null);
        fetchRecipes();
    }

    const saveRecipes = async (name: string, text: string) => {
        let recipeId: string | null = null;

        if (recipes) {
            const parts = text.split('레시피:');
            if (parts.length === 2) {
                const ingredients = parts[0].trim().replace(/^재료:\s*/g, "");
                const recipeDetails = parts[1].trim();

                const updatedRecipes: Recipe[] = [];
                for (const recipe of recipes) {
                    if(recipe.recipeName === name) {
                        const recipeRequest: RecipeRequest = {
                            recipeName: recipe.recipeName,
                            recipeImg: recipe.recipeImg as string,
                            introduce: recipe.introduce,
                            ingredients: ingredients,
                            recipeDetails: recipeDetails,
                            query: name + "레시피",
                        }
                        const res = await SaveRecipeApi(recipeRequest);
                        console.log(res.data.data.recipeVideoResponses);
                        recipeId = res.data.data.recipeId;

                        updatedRecipes.push({
                            ...recipe,
                            ingredients: ingredients,
                            recipeDetails: recipeDetails,
                            RecipeVideoList: res.data.data.recipeVideoResponses,
                            recipeId: res.data.data.recipeId,
                        })
                    } else {
                        updatedRecipes.push(recipe);
                    }
                }
                setRecipes(updatedRecipes);
                sessionStorage.setItem('recipes', JSON.stringify(updatedRecipes));
            }
        }
        return recipeId;
    }

    const fetchRecipe = async (name: string) => {
        try {
            const res = await callChatGPT(`
                ${name}의 레시피 알려줘. 
                재료는 자세한 양도 알려줘. 
                형식은 재료: 재료마다 개행문자로 구분하고, 레시피: 숫자. 개행문자로 구분해. 
                다른 문장은 출력하지마.
            `);
            console.log("call chatGPT!")
            console.log(res);
            if (res !== null) {
                const id = saveRecipes(name, res);
                return id;
            }
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    const handleRecipeDetails = async (name: string) => {
        const selectedRecipe = recipes?.find(recipe => recipe.recipeName === name);

        if (selectedRecipe) {
            if (selectedRecipe.recipeId) {
                navigate(`/recommendedRecipes/${selectedRecipe.recipeId}`);
            } else {
                setIsLoading(true);
                const id = await fetchRecipe(name);
                navigate(`/recommendedRecipes/${id}`);
                setIsLoading(false);
            }
        }
    }

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
    
    console.log(isLoading);
    
    return (
        <>
        {isLoading? 
            <Wrapper>
                <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <h3>잠시만 기다려주세요.</h3>
                    <img src={Loading} alt="로딩" width="30%" />
                </div>
            </Wrapper>
        : 
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
                        {recipes? recipes.map((recipe) => (
                            <>
                            <Recipe onClick={() => handleRecipeDetails(recipe.recipeName)}>
                                {recipe.recipeImg? <RecipeImg src={recipe.recipeImg} />
                                : <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "12rem",
                                    height: "9rem",
                                    objectFit: "cover",
                                    borderRadius: "0.8rem",
                                    }}>
                                    <img src={DefaultImg} style={{width: "8rem"}}/>
                                    </div>}
                                <RecipeInfo>
                                    <div>
                                        <div style={{fontSize: "1.2rem", fontWeight: "700"}}>{recipe.recipeName}</div>
                                    </div>
                                    <div>
                                        <div style={{color: "rgba(0,0,0,0.5)", lineHeight: "1.4"}}>{recipe.introduce}</div>
                                    </div>
                                </RecipeInfo>   
                            </Recipe>
                        </>
                        )): <SkeletonRecipes />}
                    </RecipesList>
                </Item>
            </RecipesSection>
            <ButtonSection>
                <Button typeState={"completeBtn"} onClick={createNewRecipes}>
                    <Text font={"button2"}>다른 레시피를 알고 싶어요</Text>
                </Button>
                <Link to={"/main"}>
                    <Button typeState={"disproveBtn"}>
                        <Text font={"button2"}>레시피 추천 그만두기</Text>
                    </Button>
                </Link>
            </ButtonSection>
        </Wrapper>
    </>
    }
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
    margin-top: 5rem;
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
    cursor: pointer;
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