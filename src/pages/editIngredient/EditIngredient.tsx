import RefrigeratorHeader from "@/components/refrigerator/RefrigeratorHeader";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Text from "@/components/commonComponents/Text";
import Button from "@/components/commonComponents/Button";
import { Link, useParams } from "react-router-dom";

const EditIngredient = () => {
    const { id } = useParams();

    const [postImg, setPostImg] = useState<File | null>();
    const [previewImg, setPreviewImg] = useState<string | null>();

    // const formData = new FormData();
    // formData.append('ingredientImage', postImg);

    const changeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files !== null) {
            const file = event.target.files[0];
            if(file && file.type.substring(0, 5) === "image") {
                setPostImg(file);
            }
        }
    }

    useEffect(() => {
        if(postImg){
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImg(reader.result as string);
            }
            reader.readAsDataURL(postImg);
        }
    }, [postImg]);

    return (
        <>
            <RefrigeratorHeader />
            <Wrapper>
                <label htmlFor="img">
                    {previewImg ? (
                        <IngredientImg src={previewImg} />
                    ) : (
                        <InputImg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="50" height="50" stroke-width="1" stroke="white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </InputImg>
                    )}
                </label>
                <input id="img" type="file" accept="image/*" style={{display: "none"}} onChange={changeImg}/>
                <InfoSection>
                    <Info>
                        <Text font={"title4"}>이름</Text>
                        <InputInfo type="text"/>
                    </Info>
                    <Info>
                        <Text font={"title4"}>카테고리</Text>
                        <Select>
                            <option>야채류</option>
                            <option>소스류</option>
                        </Select>
                    </Info>
                    <Info>
                        <Text font={"title4"}>소비기한</Text>
                        <InputInfo type="date"/>
                    </Info>
                    <Info>
                        <Text font={"title4"}>메모</Text>
                        <Textarea maxLength={100} placeholder="최대 100자까지 입력 가능합니다."/>
                    </Info>
                </InfoSection>
                <Link to={`/ingredient/${id}`}>
                    <div style={{position: "fixed", left: "50%", transform: "translate(-50%, 0)", bottom: "3rem"}}>
                        <Button typeState={"completeBtn"}>수정 완료하기</Button>
                    </div>
                </Link>
            </Wrapper>
        </>
    );
}
export default EditIngredient;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const IngredientImg = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 5rem;
    margin: 3 0;
    object-fit: cover;
    cursor: pointer;
`;

const InputImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 10rem;
    border-radius: 5rem;
    background: rgba(0, 0, 0, 0.1);
    margin: 3rem 0;
    cursor: pointer;
`;

const InfoSection = styled.div`
    width: 100%;
    padding: 0 4rem;
    margin-bottom: 1.5rem;
`;

const Info = styled.div`
    margin-bottom: 2rem;
`;

const InputInfo = styled.input`
    width: 100%;
    height: 2.5rem;
    border: solid 0.1rem rgba(0, 0, 0, 0.2);
    font-size: 1.2rem;
    outline: none;
    border-radius: 0.5rem;
`;

const Select = styled.select`
    width: 100%;
    height: 2.5rem;
    border: solid 0.1rem rgba(0, 0, 0, 0.2);
    font-size: 1.2rem;
    outline: none;
    border-radius: 0.5rem;
`;

const Textarea = styled.textarea`
    width: 100%;
    height: 10.5rem;
    border: solid 0.1rem rgba(0, 0, 0, 0.2);
    font-size: 1.2rem;
    resize: none;
    outline: none;
    border-radius: 0.5rem;
`;