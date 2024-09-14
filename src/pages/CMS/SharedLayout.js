import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../components";

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[85vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default SharedLayout;
