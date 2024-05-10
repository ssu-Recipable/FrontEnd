import styled from "styled-components";
import Text from "../commonComponents/Text";
import { useState } from "react";

const RefrigeratorHeader = () => {
    const [name, setName] = useState("유미라");
    return (
        <>
            <TitleSection>
                    <Text font={"title1"}>{name}님의 냉장고</Text>
            </TitleSection>
            <hr style={{ border : "0.1rem solid #d8d8d8", width: "100%" }}/>
        </>
    );
}
export default RefrigeratorHeader;

const TitleSection = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 2rem;
    padding: 0.8rem;
`;