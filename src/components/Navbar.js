import React, { useState } from "react";
import SideNav, { MenuIcon } from "react-simple-sidenav";

const Navbar = (props) => {
  const [showNav, setShowNav] = useState();

  const navItems = [
    <a target="_blank" href="someLink">
      Link1
    </a>,
    <a target="_blank" href="someLink">
      Link2
    </a>,
    <a target="_blank" href="someLink">
      Link3
    </a>,
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
