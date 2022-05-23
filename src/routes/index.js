import { Route, BrowserRouter, Routes } from "react-router-dom";
import { HomePage } from "../pages/home";
import { CepPage } from "../pages/cep";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={"/search/cep"} element={<CepPage />} />

        <Route path={"/*"} element={<CepPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
