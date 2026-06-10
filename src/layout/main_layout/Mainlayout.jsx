import React from "react";
import { Outlet } from "react-router";
import Navigation from "../navigation/Navigation";

function Mainlayout() {
  return (
    <div>
      <Navigation />

      <Outlet />
    </div>
  );
}

export default Mainlayout;
