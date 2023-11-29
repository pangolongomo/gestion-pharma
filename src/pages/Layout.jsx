import React from "react";
import Navbvar from "../components/Navbvar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <Navbvar />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
