import Text from "@/components/commonComponents/Text";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { FaUserCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import Button from "@/components/commonComponents/Button";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const movePreviousPage = () => {
    navigate(-1);
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
        <p>
          <Text font={"title3"}>차현수</Text>
          <span>
            <FaPencil size={16} color={theme.colors.black} />
          </span>
        </p>
      </EditProfileContent>
      <Button typeState={"defaultBtn"}>
        <Text font={"button1"}>프로필 수정</Text>
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
  margin-top: 5rem;
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
  margin-bottom: 6rem;
  p {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    span {
      padding: 0.2rem;
    }
  }
`;

export default EditProfile;
