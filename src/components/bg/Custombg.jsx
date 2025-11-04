import React from "react";
import PillNav from "../Navbar";

const Custombg = () => {
  return (
    <div className="m-0 p-0 relative h-screen w-full bg-amber-300 flex items-center justify-center">
      <div className="pl-7 nav flex items-center justify-center bg-green-200 h-15 w-[39%] absolute top-7 right-7.5">
        <PillNav
          // logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
            { label: "Contact", href: "/contact" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </div>

      <div className="first w-[97%] h-[60%] bg-red-400 absolute top-7"></div>
      <div className="second w-[97%] h-[40%] bg-blue-400 absolute top-[58%]"></div>
    </div>
  );
};

export default Custombg;
