import Button from "@/components/commonComponents/Button";
import Text from "@/components/commonComponents/Text";
import Modal from "./components/Modal";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { FaUserCircle } from "react-icons/fa";
import { useState, useCallback } from "react";

const MyPage = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [reason, setReason] = useState<string>("");

  const handleConfirm = () => {
    if (reason.trim() === "") {
      alert("탈퇴 사유를 입력해주세요.");
      return;
    }
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModal(false);
    setReason("");
  };

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <>
      {isOpenModal && (
        <Modal onClickToggleModal={onClickToggleModal}>
          <Text font={"title3"}>정말로 회원을 탈퇴하시겠습니까?</Text>
          <ModalContent>
            <Text font={"body1"}>탈퇴 사유를 알려주세요</Text>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </ModalContent>
          <ModalAction>
            <button onClick={handleCancel}>취소</button>
            <button onClick={handleConfirm}>확인</button>
          </ModalAction>
        </Modal>
      )}
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
          <div onClick={onClickToggleModal}>
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
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  textarea {
    margin: 1.4rem 0;
    padding: 1rem;
    border-bottom: 1px solid ${theme.colors.grey1};
  }
`;
const ModalAction = styled.div`
  width: 9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 4rem;
    &:hover {
      background-color: ${theme.colors.grey1};
    }
  }
`;
export default MyPage;
