import styled from "styled-components";
import Text from "@/components/commonComponents/Text";
import Button from "@/components/commonComponents/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { theme } from "@/styles/theme";

const Filtering = () => {
    const foodCategories = ["한식", "양식", "일식", "중식", "디저트"];
    const skills = ["초급자", "중급자", "고급자"];

    const [selectedSkill, setSelectedSkill] = useState<string|null>(null);
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
            if(nonPreferred.includes(inputText)) {
                window.alert("이미 추가된 비선호 재료입니다.")
                return;
            }
            setNonPreffered([...nonPreferred, inputText]);
            setInputText('');
        }
    };

    const handleNonPrefferedClick = (text: string) => {
        setNonPreffered(nonPreferred.filter(Filter => Filter != text))
    }

    console.log(selectedCategories);
    console.log(selectedSkill);
    console.log(nonPreferred);

    return (
        <>
            <Wrapper>
                <TitleSection>
                    <div style={{marginBottom: "0.5rem"}}>
                        <Text font={"title1"}>원하시는 레시피에 대해 알려주세요</Text>
                    </div>
                    <div style={{marginLeft: "0.5rem"}}>
                        <Text font={"body2"} color={`${theme.colors.grey2}`}>필수적으로 선택하지 않으셔도 됩니다</Text>
                    </div>
                </TitleSection>
                <FilteringSection>
                    <Filter>
                        <Text font={"title3"}>1. 카테고리 선택</Text>
                        <ItemList>
                            {foodCategories.map((category) => 
                                <Item onClick={() => handleCategoryClick(category)}>
                                <Text font={"body1"}>{category}</Text>
                                {
                                    selectedCategories.includes(category) ? 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" fill="black">
                                            <path d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" />
                                        </svg>
                                    : null
                                }
                                </Item>
                            )}
                        </ItemList>
                    </Filter>
                    <Filter>
                        <Text font={"title3"}>2. 요리 숙련도</Text>
                        <ItemList>
                            {skills.map((skill) => 
                                <Item onClick={() => handleSkillClick(skill)}>
                                    <Text font={"body1"}>{skill}</Text>
                                    {
                                        selectedSkill === skill ? 
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" fill="black">
                                                <path d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" />
                                            </svg>
                                        : null
                                    } 
                                </Item>
                            )}
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