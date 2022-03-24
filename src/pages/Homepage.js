import React, { useEffect } from "react";
import Mainpage from "../components/Mainpage";
import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Mainpage />
      <Outlet />;
    </>
  );
};

export default Homepage;
