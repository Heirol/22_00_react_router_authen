import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <h2>LAYOUT</h2>
      <Link to="/home">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/profile">Profile</Link>
      <div>-----------------------</div>
      <hr />
      <Outlet />
    </>
  );
}

export default Layout;
