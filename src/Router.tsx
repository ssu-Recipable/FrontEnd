import { BrowserRouter, Route, Routes } from "react-router-dom";
import Survey from "@/pages/survey/Survey";
import Test from "@/pages/test/Test";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import MyPage from "./pages/mypage/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
