import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNav, { MenuIcon } from "react-simple-sidenav";

const Navbar = (props) => {
  const [showNav, setShowNav] = useState();

  const navItems = [
    <Link to="/">Home</Link>,
    <Link to="/history">History</Link>,
    <Link to="/profile">Profile</Link>,
  ];

  const title = <h1>Hello octo </h1>;

  return (
    <div className="bg-red-500 min-h-[7vh] flex items-center">
      <MenuIcon onClick={() => setShowNav(true)} className="bg-red-500 ml-5" />
      <SideNav
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        title={title}
        items={navItems}
        navStyle={{ width: "40%" }}
      />
    </div>
  );
};

export default Navbar;
