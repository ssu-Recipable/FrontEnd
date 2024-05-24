import styled from "styled-components";
import Text from "../commonComponents/Text";
import { useState } from "react";
import { Link } from "react-router-dom";
import { theme } from "@/styles/theme";

const RefrigeratorHeader = () => {
    const [name, setName] = useState("유미라");
    return (
        <>
            <TitleSection>
                    <Link to={'/main'}>
                        <img src={'/src/assets/images/Recipable_Logo2.png'} style={{height: "3.5rem", position: "absolute", left: "0"}} />
                    </Link>
                    <Link to={'/refrigerator'}>
                        <Text font={"title1"}>{name}님의 냉장고</Text>
                    </Link>
            </TitleSection>
            <hr style={{ border : `1px solid ${theme.colors.grey2}`, width: "100%" }}/>
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
    position: relative;
`;