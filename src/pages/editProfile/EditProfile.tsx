import Text from "@/components/commonComponents/Text";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { FaUserCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import Button from "@/components/commonComponents/Button";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { nickNameState } from "@/recoil/atom";
import { useRef, useState } from "react";
import { ChangeUserInfo } from "@/utils/apis/UserInfoAPI";

const EditProfile = () => {
  const navigate = useNavigate();
  const [nickName, setNickName] = useRecoilState(nickNameState);
  const [changeNickName, setChangeNickName] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const movePreviousPage = () => {
    navigate(-1);
  };

  const handleChangeNickName = () => {
    setChangeNickName((prev) => !prev);
  };

  const saveNickName = async () => {
    try {
      if (inputRef.current!.value.trim().length > 7) {
        alert("닉네임은 7자 이하로 설정 가능합니다!");
        return;
      } else {
        const finalCheck = window.confirm("해당 닉네임으로 변경하시겠습니까?");
        if (finalCheck) {
          const response = await ChangeUserInfo(
            inputRef.current?.value as string
          );
          console.log(response);
          setNickName(inputRef.current!.value);
          navigate("/mypage");
        } else {
          return;
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <EditProfileContainer>
      <EditProfileTitle>
        <MoveBack onClick={movePreviousPage}>
          <IoIosArrowBack size={20} />
        </MoveBack>
        <Text font={"title1"}>프로필 수정</Text>
      </EditProfileTitle>
      <EditProfileContent>
        <FaUserCircle size={90} color={theme.colors.grey2} />
        <ProfileEdit>
          <NameSection>
            {changeNickName ? (
              <Input defaultValue={nickName} ref={inputRef} />
            ) : (
              <>
                <Text font={"title3"}>{nickName}</Text>
                <EditBtn onClick={handleChangeNickName}>
                  <FaPencil size={16} color={theme.colors.black} />
                </EditBtn>
              </>
            )}
          </NameSection>
        </ProfileEdit>
      </EditProfileContent>
      <Button typeState={"defaultBtn"} onClick={saveNickName}>
        <Text font={"button1"}>프로필 수정하기</Text>
      </Button>
    </EditProfileContainer>
  );
};

const EditProfileContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EditProfileTitle = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.grey2};
  padding: 1rem;
`;

const MoveBack = styled.span`
  cursor: pointer;
  position: absolute;
  left: 1rem;
`;

const EditProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  margin-bottom: 10rem;
`;

const ProfileEdit = styled.div`
  position: relative;
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NameSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  width: 10rem;
  border-bottom: 1px solid ${theme.colors.grey2};
`;

const Input = styled.input`
  width: 15rem;
  text-align: center;
  margin-top: 0.58rem;
  outline: none;
  border-radius: 4rem;
  border: 0.01rem soild ${theme.colors.grey1};
`;

const EditBtn = styled.span`
  position: absolute;
  right: 0;
  bottom: 0.1rem;
  cursor: pointer;
  padding: 0.2rem;
`;

export default EditProfile;
