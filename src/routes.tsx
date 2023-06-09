


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeContainer } from "./containers/HomeContainer";
import { PlatformLayout } from "./components/layout/PlatformLayout";

import "./styles/footer.scss"

export const Navigations = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PlatformLayout />} path="/">
          <Route element={<HomeContainer />} path="/"  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

