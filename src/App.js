import { useState } from "react";
import SideNav, { MenuIcon } from "react-simple-sidenav";

function App(props) {
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
    <div className="App">
      <div className="bg-red-500 min-h-[5vh] flex items-center">
        <MenuIcon onClick={() => setShowNav(true)} className="bg-red-500" />
        <SideNav
          showNav={showNav}
          onHideNav={() => setShowNav(false)}
          title={title}
          items={navItems}
        />
      </div>
      <h1 className="text-3xl font-bold underline">Hello Asbeza.</h1>
    </div>
  );
}

export default App;
