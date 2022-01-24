import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import First from "./First";
import Second from "./Second";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/1" element={<First />} />
        <Route path="/2" element={<Second />} />
        <Route path="*" element={<Navigate to="/1" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
