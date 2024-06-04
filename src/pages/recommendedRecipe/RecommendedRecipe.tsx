import styled, { keyframes } from "styled-components";
import Text from "@/components/commonComponents/Text";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Recipe } from "@/types/RecipeType";
import { callChatGPT } from "@/utils/chatGPTUtil";

const RecommendedRecipe = () => { 
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const { id } = useParams();
    const [isBookmarked, setIsBookmarked] = useState(false);

    const [recipes, setRecipes] = useState<Recipe[] | null>(null);

    const navigate = useNavigate();
    
    const saveRecipes = (text: string) => {
        if (recipes) {
            const parts = text.split('레시피:');
            if (parts.length === 2) {
                const ingredients = parts[0].trim().replace(/^재료:\s*/g, "");
                const recipeDetails = parts[1].trim();
                const updatedRecipes = recipes.map((recipe) => {
                    if(recipe.recipeName === id) {
                        return {
                            ...recipe,
                            ingredients: ingredients,
                            recipeDetails: recipeDetails
                        }
                    } else {
                        return recipe
                    }
                })
                setRecipes(updatedRecipes);
                sessionStorage.setItem('recipes', JSON.stringify(updatedRecipes));
            }
        }
    }

    const fetchRecipe = async () => {
        try {
            const res = await callChatGPT(`${id}의 레시피 알려줘. 재료는 자세한 양도 알려줘. 형식은 재료: 재료마다 개행문자로 구분하고, 레시피: 숫자. 개행문자로 구분해. 다른 문장은 출력하지마.`);
            console.log("call chatGPT!")
            if (res !== null) {
                saveRecipes(res);
            }
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleBookmarkClick = () => {
        setIsBookmarked(!isBookmarked);
    };

    const handleShareClick = async () => {
        if(!window.Kakao.isInitialized()) {
            window.Kakao.init(import.meta.env.VITE_APP_KAKAO_JAVASCRIPT_KEY);
        }

        await window.Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: 'Recipable: 만들어 먹는 재미',
                description: '레시피를 공유하고 싶어요',
                imageUrl: '@/assets/images/Recipable_MainLogo.png',
                link: {
                    webUrl: 'http://localhost:5173/',
                    mobileWebUrl: 'http://localhost:5173/'
                }
            }
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            
            if (scrollTop < lastScrollTop) {
                setIsHeaderVisible(true);
            } else {
                setIsHeaderVisible(false);
            }
            setLastScrollTop(scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);
    
    useEffect(() => {
        const storedRecipes = sessionStorage.getItem('recipes');
        console.log(1);
        if (storedRecipes) {
            console.log(2);
            setRecipes(JSON.parse(storedRecipes));
            console.log(3);
        }
    }, []);

    useEffect(()=> {
        recipes?.map((recipe) => {
            console.log(4);
            if(recipe.recipeName === id) {
                console.log(5);
                if(recipe.ingredients === undefined && recipe.recipeDetails === undefined && recipe.RecipeVideoList === undefined) {
                    console.log(6);
                    fetchRecipe();
                    console.log(7);
                }
            }
        })
    }, [recipes])
    
    return (
        <>
            <Header style={{ top: isHeaderVisible ? '0' : '-4rem' }}>
                <svg onClick={handleBackClick} style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                </svg>
            </Header>
            <Wrapper>
                {recipes?.map((recipe) => (
                    recipe.recipeName === id?
                        <>
                        <Img src={recipe.recipeImg}/>
                        <InfoSection>
                            <TextSection>
                                <Text font={"title1"}>{recipe.recipeName}</Text>
                                <Text font={"body2"}>{recipe.introduce}</Text>
                            </TextSection>
                            <IconSection>
                                <svg onClick={handleShareClick} style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="20">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                </svg>
                                <svg onClick={handleBookmarkClick} style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" fill={isBookmarked? "#FFEB57" : "#E6E6E6"} viewBox="0 0 24 24" stroke-width="2" stroke={isBookmarked? "#FFEB57" : "#E6E6E6"} width="24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </IconSection>
                        </InfoSection>
                        <IngredientsSection>
                            <Text font={"title3"}>재료</Text>
                            {recipe.ingredients? <Ingredients>{recipe.ingredients}</Ingredients>
                            : 
                            <SkeletonWrapper>
                                {[...Array(2)].map(()=> <SkeletonDiv />)}
                            </SkeletonWrapper>
                            }
                        </IngredientsSection>
                        <RecipeSection>
                            <Text font={"title3"}>레시피</Text>
                            {recipe.recipeDetails? <RecipeDetail>{recipe.recipeDetails}</RecipeDetail>
                            : 
                            <SkeletonWrapper>
                                {[...Array(3)].map(()=> <SkeletonDiv />)}
                            </SkeletonWrapper>}
                        </RecipeSection>
                        <VideoSection>
                            <Text font={"title3"}>추천 영상</Text>
                            <Videos>
                                <a href="https://www.youtube.com/watch?v=qWbHSOplcvY" target="_blank" rel="noopener noreferrer">
                                    <Thumnail />
                                </a>
                            </Videos>
                        </VideoSection>
                        </>
                    : null)
                )}
            </Wrapper>
            
        </>
    )
}
export default RecommendedRecipe;


const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 4rem;
    background: white;
    transition: top 0.1s;
    padding: 0 1rem;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Img = styled.img`
    width : 100%;
    margin-top: 4rem;
    height: 22rem;
    background: rgba(0, 0, 0, 0.1);
    object-fit: cover;
`;

const InfoSection = styled.div`
    width: 100%;
    position: relative;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
    padding-bottom: 3.5rem;
`;

const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 1rem 0;
`;

const IconSection = styled.div`
    position: absolute;
    top : 1.5rem;
    right: 0;
    display: flex;
    gap: 1rem;
`;

const IngredientsSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem 0.5rem;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
`;

const Ingredients = styled.pre`
    line-height: 2.5;
    padding: 0 1rem;
    color: rgba(0, 0, 0, 0.5);
`;

const RecipeSection = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 0.5rem;
    width: 100%;
    padding: 1rem 0.5rem;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
`;

const RecipeDetail = styled.pre`
    padding: 0 1rem;
    line-height: 3;
    white-space: pre-wrap;
    word-wrap: break-word;
    color: rgba(0, 0, 0, 0.5);
`;

const VideoSection = styled.div`
    width: 100%;
    padding: 1rem 0.5rem;
    margin-bottom: 5rem;
`;

const Videos = styled.div`
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Thumnail = styled.img`
    width : 100%;
    height: 15rem;
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
`;

const fadeIn = keyframes`
    from {
        opacity: 0.5;
    }
    to {
        opacity: 1;
    }
`;

const SkeletonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin: 1.5rem 0;
    animation: ${fadeIn} 0.9s infinite alternate;
`;

const SkeletonDiv = styled.div`
    width: 100%;
    height: 1.5rem;
    background-color: #ccc;
    border-radius: 1rem;
`;