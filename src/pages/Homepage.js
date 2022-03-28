import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SearchAppBar from "../components/Navbar";

const Homepage = () => {
  return (
    <>
      <SearchAppBar />
      <Outlet />;
    </>
  );
};

export default Homepage;
