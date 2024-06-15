import { useMemo, useRef, useState } from "react";
import styled from "styled-components";
import Text from "@/components/commonComponents/Text";
import { FaFolderPlus } from "react-icons/fa";
import { theme } from "@/styles/theme";
import Button from "@/components/commonComponents/Button";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ResultScan } from "@/utils/apis/ScanReceiptAPI";
import { UploadFile } from "@/types/ScanReceiptType";
import Spinner from "@/assets/gif/Loading.gif"
import { useSetRecoilState } from "recoil";
import { ingredientDataListState } from "@/recoil/atom";

const ScanReceipt = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<UploadFile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const setIngredientDataList = useSetRecoilState(ingredientDataListState);
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

  const receiveReceipt = async () => {
    if (imageFile) {
      const fileData = new FormData();
      fileData.append("multipartFile", imageFile!.file);

      console.log(fileData.get("multipartFile"));
      // 영수증 이미지 서버 전송 api
      try {
        setIsLoading(true);
        const response = await ResultScan(fileData);
        const ingredData = response.data.data.ingredientResponseList;
        console.log(ingredData);
        setIngredientDataList(ingredData);
        setIsLoading(false);
        navigate("/resultscan");
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("영수증을 업로드해주세요!");
      return;
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
      isLoading ? (
        <>
          <Loading>
            <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Text font={"title3"}>영수증을 분석하고 있습니다.</Text>
                    <img src={Spinner} alt="로딩" width="30%" />
            </div>
          </Loading>
        </>
      ) : 
      <ScanReceiptContainer>
        <MoveBack onClick={movePreviousPage}>
          <IoIosArrowBack size={20} />
        </MoveBack>
        <TitleSection>
          <Text font={"title1"}>영수증 사진을 업로드해주세요</Text>
        </TitleSection>
        {showImage}
        <Text font={"body2"} color={theme.colors.grey1}>
          사진이 선명하지 않으면 분석 결과가 정확하지 않을 수 있습니다.
        </Text>
          <form encType="multipart/form-data">
            <input
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              ref={fileInputRef}
              onChange={uploadFile}
              style={{ display: "none" }}
            />
            <button type="button" onClick={handleClickFileInput}></button>
          </form>
        <div style={{marginTop: "5rem"}}>
        <Button typeState={"completeBtn"} onClick={receiveReceipt}>
          <Text font={"button1"}>영수증 분석하기</Text>
        </Button>
      </div>
    </ScanReceiptContainer>
  );
};

const ScanReceiptContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TitleSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MoveBack = styled.span`
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 9rem;
`;

const NoSelecetedImage = styled.div`
  position: relative;
  width: 30rem;
  height: 27rem;
  margin: 2rem 0;
  background-color: ${theme.colors.grey2};
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  cursor: pointer;
`;

const ShowFileImage = styled.img`
  width: 30rem;
  height: 27rem;
  margin: 2rem 0;
  object-fit: cover;
`;

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LoadImg = styled.img`
  position: relative;
  height: 35rem;
  margin-bottom: 15rem;
`;

const LoadContent = styled.div`
  position: absolute;
  bottom: 35rem;
`;

export default ScanReceipt;
