import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" bg-[#420a18] py-4">
        <p className="text-center text-white font-semibold text-xs">
          Copyright © 2022 All rights reserved by
          <NavLink
            to="https://www.health.go.ug/"
            target="_blank"
            className="text-[#fe8a15]"
          >
            {" "}
            Africa CDC
          </NavLink>
        </p>
      </div>
    </>
  );
};

export default Footer;
