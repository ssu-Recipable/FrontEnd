import { BrowserRouter, Route, Routes } from "react-router-dom";
import Survey from "@/pages/survey/Survey";

const Router = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/survey" element={<Survey />} />
          </Routes>
        </BrowserRouter>
      );
}
export default Router;