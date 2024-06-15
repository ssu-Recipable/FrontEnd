import styled from "styled-components";
import Text from "../commonComponents/Text";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { nickNameState } from "@/recoil/atom";
import HeaderLogo from "@/assets/images/Recipable_Logo2.png";

const RefrigeratorHeader = () => {
    const name = useRecoilValue(nickNameState);

    return (
        <>
            <TitleSection>
                    <Link to={'/main'}>
                        <img src={HeaderLogo} style={{height: "3.5rem", position: "absolute", left: "0"}} />
                    </Link>
                    <Link to={'/refrigerator'}>
                        <Text font={"title1"}>{name}님의 냉장고</Text>
                    </Link>
            </TitleSection>
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
    margin-bottom: 2.5rem;
`;