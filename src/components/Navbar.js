import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNav, { MenuIcon } from "react-simple-sidenav";

import Asbeza from "./../assets/Asbeza.png";

const Navbar = (props) => {
  const [showNav, setShowNav] = useState();

  const navItems = [
    <Link to="/">Home</Link>,
    <Link to="/history">History</Link>,
    <Link to="/profile">Profile</Link>,
  ];

  const title = (
    <div className="flex items-center">
      <img src={Asbeza} alt="asbeza" className="w-[30%]" />
      <h1 className="sm:text-4xl font-bold">Asbeza</h1>
    </div>
  );

  return (
    <div className="bg-[#046d4c] min-h-[7vh] flex items-center">
      <MenuIcon onClick={() => setShowNav(true)} className="ml-5" />
      <SideNav
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        title={title}
        items={navItems}
        style={{}}
        navStyle={{ width: "40%", backgroundColor: "#fff" }}
        titleStyle={{ backgroundColor: "#046d4c" }}
        itemHoverStyle={{ backgroundColor: "#9fcf37" }}
      />
    </div>
  );
};

export default Navbar;
