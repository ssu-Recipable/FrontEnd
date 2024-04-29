import Button from "@/components/commonComponents/Button";
import Text from "@/components/commonComponents/Text";
import { theme } from "@/styles/theme";
import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
// import QuitMemberModal from "./components/QuitMemberModal";
// import { useRef } from "react";

const MyPage = () => {
  // const dialog = useRef<HTMLInputElement>(null);
  return (
    <>
      {/* <QuitMemberModal ref={dialog} /> */}
      <MyPageContainer>
        <MyPageTitle>
          <Text font={"title1"}>마이페이지</Text>
        </MyPageTitle>
        <UserInfo>
          <FaUserCircle size={90} color={theme.colors.grey2} />
          <Text font={"title3"}>차현수</Text>
        </UserInfo>
        <MyPageMenu>
          <div>
            <Text font={"body1"}>프로필 수정</Text>
          </div>
          <span
            style={{
              border: `0.5px solid ${theme.colors.grey1}`,
              width: "100%",
            }}
          />
          <div>
            <Text font={"body1"}>회원 탈퇴</Text>
          </div>
        </MyPageMenu>
        <Button typeState={"defaultBtn"}>
          <Text font={"button1"}>로그아웃</Text>
        </Button>
      </MyPageContainer>
    </>
  );
};

const MyPageContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MyPageTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.grey2};
  margin-top: 5rem;
  padding: 1rem;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
`;
const MyPageMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${theme.colors.grey1};
  border-bottom: 1px solid ${theme.colors.grey1};
  margin: 7rem 0;
  :hover {
    cursor: pointer;
    background-color: ${theme.colors.grey1};
    opacity: 0.9;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
  }
`;
export default MyPage;