import { BrowserRouter, Route, Routes } from "react-router-dom";
import Survey from "@/pages/survey/Survey";
import Test from "@/pages/test/Test";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/survey" element={<Survey />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
