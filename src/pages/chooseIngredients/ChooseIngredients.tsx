import { styled } from "styled-components";
import Text from "@/components/commonComponents/Text";
import RefrigeratorHeader from "@/components/refrigerator/RefrigeratorHeader";
import { useState } from "react";
import Button from "@/components/commonComponents/Button";
import { useNavigate } from "react-router-dom";

const ChooseIngredients = () => {
    const navigate = useNavigate();

    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
    const [allSelected, setAllSelected] = useState(false);

    const handleIngredientClick = (ingredient: string) => {
        const isAlreadySelected = selectedIngredients.includes(ingredient);

        if (isAlreadySelected) {
            setSelectedIngredients(prevState => prevState.filter(item => item != ingredient));
        } else {
            setSelectedIngredients(prevState => [...prevState, ingredient]);
        }
    }

    const handleSelectAllClick = () => {
        if (allSelected) {
            setSelectedIngredients([]);
        } else {
            const allIngredient = ["양배추1", "양배추2", "양배추3", "양배추4"]
            setSelectedIngredients(allIngredient);
        }
        setAllSelected(prevState => !prevState);
    };

    const handleCompleteClick = () => {
        if (selectedIngredients.length === 0) {
            alert("재료를 하나 이상 선택해주세요.");
        } else {
            navigate('/filtering');
        }
    }

    return (
        <>
            <RefrigeratorHeader />
            <Wrapper>
            <CategorySection>
                    <Category>
                        <Text font={"body1"}>야채류</Text>
                        <Text font={"body2"} color={"gray"}>상하기 쉬워요.</Text>
                        <IngredientList>
                            <Ingredient onClick={()=>handleIngredientClick("양배추1")}>
                                <IngredientImg 
                                    src={"/src/assets/images/default_ingredients.png"} 
                                    isSelected={selectedIngredients.includes("양배추1")}
                                />
                                <Text font={"body1"}>양배추1</Text>
                                <Text font={"body2"} color={"gray"}>D-3</Text>
                            </Ingredient>
                            <Ingredient onClick={()=>handleIngredientClick("양배추2")}>
                                <IngredientImg 
                                    src={"/src/assets/images/default_ingredients.png"} 
                                    isSelected={selectedIngredients.includes("양배추2")}
                                />
                                <Text font={"body1"}>양배추2</Text>
                                <Text font={"body2"} color={"gray"}>D-3</Text>
                            </Ingredient>
                            <Ingredient onClick={()=>handleIngredientClick("양배추3")}>
                                <IngredientImg 
                                    src={"/src/assets/images/default_ingredients.png"} 
                                    isSelected={selectedIngredients.includes("양배추3")}
                                />
                                <Text font={"body1"}>양배추3</Text>
                                <Text font={"body2"} color={"gray"}>D-3</Text>
                            </Ingredient>
                        </IngredientList>
                    </Category>
                    <hr style={{ border : "0.1rem solid #d8d8d8", width: "100%" }}/>
                    <Category>
                        <Text font={"body1"}>소스류</Text>
                        <Text font={"body2"} color={"gray"}>오래 두고 먹어요.</Text>
                        <IngredientList>
                        <Ingredient onClick={()=>handleIngredientClick("양배추4")}>
                                <IngredientImg 
                                    src={"/src/assets/images/default_ingredients.png"} 
                                    isSelected={selectedIngredients.includes("양배추4")}
                                />
                                <Text font={"body1"}>양배추4</Text>
                                <Text font={"body2"} color={"gray"}>D-3</Text>
                            </Ingredient>
                        </IngredientList>
                    </Category>
                </CategorySection>
                <SelectAll>
                    <svg onClick={handleSelectAllClick} style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={allSelected? "#78e99b" : "#e6e6e6"} width="20">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                    <Text font={"body2"}>전체 선택하기</Text>
                </SelectAll>
                <Button typeState={"completeBtn"} onClick={handleCompleteClick}>재료 선택 완료</Button>
            </Wrapper>
        </>
    )
}
export default ChooseIngredients;

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
    cursor: pointer;
`;

interface IngredientProps {
    isSelected: boolean;
}

const IngredientImg = styled.img<IngredientProps>`
    width: 4.5rem;
    height: 4.5rem;
    opacity: ${({ isSelected }) => isSelected ? '1' : '0.3'};
    transition: opacity 0.3s ease;
    &:hover {
        opacity: 1;
    }
`;

const SelectAll = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
`;