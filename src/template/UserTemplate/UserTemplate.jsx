import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import HomePage from "../../pages/HomePage/HomePage";

const UserTemplate = () => {
  return (
    <div>
      <HomePage />
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
};

export default UserTemplate;
