import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Layout from "./layout/Layout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SearchResultPage from "./pages/SearchResultPage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import GenresPage from "./pages/GenresPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<HomePage />} /> */}
          <Route path="home" element={<HomePage />} />
          <Route path=":genres" element={<GenresPage />} />
          <Route path="search-result" element={<SearchResultPage />} />
          <Route path=":movieID" element={<DetailPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
