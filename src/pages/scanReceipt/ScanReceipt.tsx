import React, { useMemo, useRef, useState } from "react";
import styled from "styled-components";
import Text from "@/components/commonComponents/Text";
import { FaFolderPlus } from "react-icons/fa";
import { theme } from "@/styles/theme";
import Button from "@/components/commonComponents/Button";

type UploadFile = {
  file: File;
  thumbnail: string;
  type: string;
};

const ScanReceipt = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<UploadFile | null>(null);
  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };
  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    // const length = fileList?.length;
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);
      setImageFile({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
    }
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
      <Text font={"title1"}>영수증 사진을 업로드해주세요</Text>
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
      <Button typeState={"completeBtn"}>
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
const NoSelecetedImage = styled.div`
  position: relative;
  width: 25rem;
  height: 27rem;
  margin: 2rem 0;
  background-color: ${theme.colors.grey2};
  span {
    position: absolute;
    top: 11rem;
    right: 10.5rem;
  }
`;
const ShowFileImage = styled.img`
  width: 25rem;
  height: 27rem;
  margin: 2rem 0;
`;
export default ScanReceipt;
