import { useMemo, useRef, useState } from "react";
import styled from "styled-components";
import Text from "@/components/commonComponents/Text";
import { FaFolderPlus } from "react-icons/fa";
import { theme } from "@/styles/theme";
import Button from "@/components/commonComponents/Button";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
// import { api } from "@/utils/apis/axios";

interface UploadFile {
  file: File;
  thumbnail: string;
  type: string;
}

const ScanReceipt = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<UploadFile | null>(null);
  const navigate = useNavigate();

  const movePreviousPage = () => {
    navigate(-1);
  };

  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);
      setImageFile({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
    }
  };

  const receiveReceipt = () => {
    if (imageFile) {
      const fileData = new FormData();
      fileData.append("receiptFile", imageFile!.file);
      for (const value of fileData.values()) {
        console.log(value);
      }
    } else {
      alert("영수증을 업로드해주세요!");
      return;
    }
    // 영수증 이미지 서버 전송 api
    // 영수증이미지전송api.('/api주소', fileData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // })
  };

  const showImage = useMemo(() => {
    if (!imageFile && imageFile == null) {
      return (
        <NoSelecetedImage onClick={handleClickFileInput}>
          <span>
            <FaFolderPlus size={40} color={theme.colors.white} />
          </span>
        </NoSelecetedImage>
      );
    }
    return (
      <ShowFileImage
        src={imageFile.thumbnail}
        alt={imageFile.type}
        onClick={handleClickFileInput}
      />
    );
  }, [imageFile]);

  return (
    <ScanReceiptContainer>
      <TitleSection>
        <MoveBack onClick={movePreviousPage}>
          <IoIosArrowBack size={20} />
        </MoveBack>
        <Text font={"title1"}>영수증 사진을 업로드해주세요</Text>
      </TitleSection>
      {showImage}
      <form>
        <input
          type="file"
          accept="image/jpg, image/jpeg, image/png"
          ref={fileInputRef}
          onChange={uploadFile}
          style={{ display: "none" }}
        ></input>
        <button type="button" onClick={handleClickFileInput}></button>
      </form>
      <Button typeState={"completeBtn"} onClick={receiveReceipt}>
        <Text font={"button1"}>영수증 분석하기</Text>
      </Button>
    </ScanReceiptContainer>
  );
};

const ScanReceiptContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12rem;
`;

const TitleSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MoveBack = styled.span`
  cursor: pointer;
  position: absolute;
  left: 0;
  bottom: 0.6rem;
`;

const NoSelecetedImage = styled.div`
  position: relative;
  width: 30rem;
  height: 27rem;
  margin: 2rem 0;
  background-color: ${theme.colors.grey2};
  span {
    position: absolute;
    top: 11rem;
    right: 12.6rem;
  }
`;
const ShowFileImage = styled.img`
  width: 25rem;
  height: 27rem;
  margin: 2rem 0;
`;
export default ScanReceipt;
