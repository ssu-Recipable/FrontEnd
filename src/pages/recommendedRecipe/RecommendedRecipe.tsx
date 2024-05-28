import styled from "styled-components";
import Text from "@/components/commonComponents/Text";
import { useState, useEffect } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import Button from "@/components/commonComponents/Button";
import { useNavigate } from "react-router-dom";
import { api } from "@/utils/apis/axios";

interface YouTubeVideo {
    videoUrl: string;
    title: string;
    thumnail: string;
}

const RecommendedRecipe = () => {
    const ingredient = `- 신김치 2컵\n- 돼지고기(삼겹살 또는 목살) 200g\n- 두부 1/2모\n- 양파 1/2개\n- 대파 1대\n- 청양고추 1개 (선택 사항)\n- 다진 마늘 1큰술\n- 고춧가루 1큰술\n- 된장 1작은술\n- 국간장 1큰술\n- 소금 약간\n- 후추 약간\n- 물 또는 육수 4컵\n`;
    const tmpR = `1. 김치는 적당한 크기로 자르고, 양파와 파는 얇게 채 썰어줍니다.\n2. 돼지고기는 적당한 크기로 잘라줍니다.\n3. 냄비에 참기름을 두르고 다진 마늘을 볶아 향을 낸 뒤, 돼지고기를 넣고 익힙니다.\n4. 돼지고기가 살짝 익으면 고추장과 고춧가루를 넣고 볶아줍니다.\n5. 김치와 양파를 넣고 함께 볶아줍니다.\n6. 물 또는 육수를 부어주고 끓인 뒤, 두부와 미역을 넣고 중간 불에서 끓입니다.\n7. 간장과 소금으로 간을 맞추고, 파를 뿌려 마무리합니다.`
    
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const keyword = "김치찌개";
    const [isEditing, setIsEditing] = useState(false);
    const [recipe, setRecipe] = useState(tmpR);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [videos, setVideos] = useState<YouTubeVideo[]>([]);

    const navigate = useNavigate();
    
    const handleBackClick = () => {
        navigate(-1);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCompleteClick = () => {
        setIsEditing(false);
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

    const searchYouTubeVideos = async () => {
        try {
            const response = await api.get<YouTubeVideo[]>('/youtube',{
                params: { keyword },
            });
            console.log(response.data);
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        searchYouTubeVideos();
    }, []);

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
    
    
    return (
        <>
            <Header style={{ top: isHeaderVisible ? '0' : '-4rem' }}>
                <svg onClick={handleBackClick} style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                </svg>
            </Header>
            <Wrapper>
                <Img />
                <InfoSection>
                    <TextSection>
                        <Text font={"title1"}>김치찌개</Text>
                        <Text font={"body2"}>한국 전통의 맛을 담은 김치찌개!</Text>
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
                    <Ingredients>{ingredient}</Ingredients>
                </IngredientsSection>
                <RecipeSection>
                    <Text font={"title3"}>레시피</Text>
                    {isEditing? (
                        <EditRecipe>
                            <TextareaAutosize defaultValue={recipe} onChange={(e) => setRecipe(e.target.value)} />
                        </EditRecipe>
                    ): (
                        <Recipe>{recipe}</Recipe>
                    )}
                    <EditIcon>
                        {isEditing? (
                            <Button typeState={"confirmBtn"} onClick={handleCompleteClick}>완료</Button>
                        ):(
                            <svg onClick = {handleEditClick} style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="20">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                        )}
                    </EditIcon>
                </RecipeSection>
                <VideoSection>
                    <Text font={"title3"}>추천 영상</Text>
                    <Videos>
                        <a href="https://www.youtube.com/watch?v=qWbHSOplcvY" target="_blank" rel="noopener noreferrer">
                            <Thumnail />
                        </a>
                    </Videos>
                </VideoSection>
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

const Recipe = styled.pre`
    padding: 0 1rem;
    line-height: 3;
    white-space: pre-wrap;
    word-wrap: break-word;
    color: rgba(0, 0, 0, 0.5);
`;

const EditIcon = styled.div`
    position: absolute;
    top: 1.4rem;
    right: 1rem;
`

const VideoSection = styled.div`
    width: 100%;
    padding: 1rem 0.5rem;
    margin-bottom: 5rem;
`;

const EditRecipe = styled.div`
    margin: 1rem 0;
    textarea {
        width: 100%;
        padding: 1.5rem;
        line-height: 1.5;
        resize: none;
        border: 0.1rem solid rgba(0, 0, 0, 0.1);
        border-radius: 0.5rem;
        outline: none;
    }
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