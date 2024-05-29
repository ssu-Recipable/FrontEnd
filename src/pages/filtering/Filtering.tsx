import styled from "styled-components";
import Text from "@/components/commonComponents/Text";
import Button from "@/components/commonComponents/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Filtering = () => {
    const [selectedSkill, setSelectedSkill] = useState<string|null>();
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [inputText, setInputText] = useState<string>('');
    const [nonPreferred, setNonPreffered] = useState<string[]>([]);

    const handleCategoryClick = (category: string) => {
        const index = selectedCategories?.indexOf(category);
        if(index !== -1) {
            const newSelectedCategories = [...selectedCategories];
            newSelectedCategories.splice(index, 1);
            setSelectedCategories(newSelectedCategories);
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    }

    const handleSkillClick = (skill: string) => {
        setSelectedSkill(skill === selectedSkill? null: skill)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    const handleAddNonPreffered = () => {
        if (inputText.trim() !== '') {
            setNonPreffered([...nonPreferred, inputText]);
            setInputText('');
        }
    };

    const handleNonPrefferedClick = (text: string) => {
        setNonPreffered(nonPreferred.filter(Filter => Filter != text))
    }

    console.log(nonPreferred)

    return (
        <>
            <Wrapper>
                <TitleSection>
                    <Text font={"title1"}>원하시는 레시피에 대해 알려주세요.</Text>
                </TitleSection>
                <FilteringSection>
                    <Filter>
                        <Text font={"title3"}>1. 카테고리 선택</Text>
                        <ItemList>
                            <Item onClick={() => handleCategoryClick('한식')}>
                                <Text font={"body1"}>한식</Text>
                                {
                                    selectedCategories.includes('한식') ? 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" fill="black">
                                            <path d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" />
                                        </svg>
                                    : null
                                }
                            </Item>
                            <hr style={{ border : "0.1rem solid #d8d8d8", width: "100%" }}/>
                            <Item onClick={() => handleCategoryClick('양식')}>
                                <Text font={"body1"}>양식</Text>
                                {
                                    selectedCategories.includes('양식') ? 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" fill="black">
                                            <path d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" />
                                        </svg>
                                    : null
                                }
                            </Item>
                            <hr style={{ border : "0.1rem solid #d8d8d8", width: "100%" }}/>
                            <Item onClick={() => handleCategoryClick('일식')}>
                                <Text font={"body1"}>일식</Text>
                                {
                                    selectedCategories.includes('일식') ? 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" fill="black">
                                            <path d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" />
                                        </svg>
                                    : null
                                }
                            </Item>
                            <hr style={{ border : "0.1rem solid #d8d8d8", width: "100%" }}/>
                            <Item onClick={() => handleCategoryClick('중식')}>
                                <Text font={"body1"}>중식</Text>
                                {
                                    selectedCategories.includes('중식') ? 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" fill="black">
                                            <path d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" />
                                        </svg>
                                    : null
                                }
                            </Item>
                            <hr style={{ border : "0.1rem solid #d8d8d8", width: "100%" }}/>
                            <Item onClick={() => handleCategoryClick('디저트')}>
                                <Text font={"body1"}>디저트</Text>
                                {
                                    selectedCategories.includes('디저트') ? 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" fill="black">
                                            <path d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" />
                                        </svg>
                                    : null
                                }
                            </Item>
                        </ItemList>
                    </Filter>
                    <Filter>
                        <Text font={"title3"}>2. 요리 숙련도</Text>
                        <ItemList>
                            <Item onClick={() => handleSkillClick('초급자')}>
                                <Text font={"body1"}>초급자</Text>
                                {
                                    selectedSkill === '초급자' ? 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" fill="black">
                                            <path d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" />
                                        </svg>
                                    : null
                                } 
                            </Item>
                            <hr style={{ border : "0.1rem solid #d8d8d8", width: "100%" }}/>
                            <Item onClick={() => handleSkillClick('중급자')}>
                                <Text font={"body1"}>중급자</Text>
                                {
                                    selectedSkill === '중급자' ? 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" fill="black">
                                            <path d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" />
                                        </svg>
                                    : null
                                }     
                            </Item>
                            <hr style={{ border : "0.1rem solid #d8d8d8", width: "100%" }}/>
                            <Item onClick={() => handleSkillClick('고급자')}>
                                <Text font={"body1"}>고급자</Text>
                                {
                                    selectedSkill === '고급자' ? 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" fill="black">
                                            <path  d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" />
                                        </svg>
                                    : null
                                } 
                            </Item>
                        </ItemList>
                    </Filter>
                    <Filter>
                        <Text font={"title3"}>3. 비선호 재료</Text>
                        <InputSection>
                            <Input type="text" value={inputText} onChange={handleInputChange}/>
                            <Button typeState={"confirmBtn"} onClick={handleAddNonPreffered}>확인</Button>
                        </InputSection>
                        <ul style={{padding: "0 1rem"}}>
                            {nonPreferred.map((Filter, index) => (
                                <Li>
                                    <li key={index}>
                                        {Filter}
                                    </li>
                                    <svg onClick={() => handleNonPrefferedClick(Filter)} style={{ cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="gray">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </Li>
                            ))}
                        </ul>
                    </Filter>
                </FilteringSection>
                <Link to={`/recommendedRecipes`}>
                    <div style={{margin: "3rem 0"}}>
                        <Button typeState={"completeBtn"}>레시피 추천받기</Button>
                    </div>
                </Link>          
            </Wrapper>
        </>
    );
}
export default Filtering;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const TitleSection = styled.div`
    margin-top: 7rem;
    margin-bottom: 3rem;
    margin-left: 1rem;
    width: 100%;  
`;

const FilteringSection = styled.div`
    width: 100%;
    padding: 0 2rem;
`;

const Filter = styled.div`
    margin-bottom: 3rem;
`;

const ItemList = styled.ul`
    padding: 0;
    list-style-type: none;
    width: 100%;
`;

const Item = styled.li`
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    margin-left: 2rem;
    cursor: pointer;
`;

const InputSection = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
`;

const Input = styled.input`
    width: 24rem;
    border-radius: 1rem;
    padding: 0.5rem;
    font-size: 1.2rem;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Li = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`