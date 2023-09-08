import React from "react";
import logo from "../assets/logo.png";
import { FaWheelchair } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <div className=" w-full h-[12vh] flex items-center px-10 bg-[url('./assets/navbg.png')] bg-cover">
        <div className=" w-[40%] ">
          <img src={logo} alt="" />
        </div>
        <div className=" w-[60%] font-Raleway text-[#F2F2F2] flex justify-between items-center">
          <div className="  text-xl font-semibold text-white ">Home</div>
          <div className="  text-xl font-semibold text-white ">About</div>
          <div className="  text-xl font-semibold text-white ">Centers</div>
          <div className="  text-xl font-semibold text-white ">FAQ</div>
          <div className="  text-xl font-semibold text-white ">Contact Us</div>
          <div className=" flex items-center">
            <button className=" px-4 py-1 rounded-2xl text-black  bg-white ">
              Login
            </button>
            <div className=" mx-2  ">or</div>
            <button className=" px-4 py-1 rounded-2xl text-black  bg-white ">
              Sign up
            </button>
            <div className=" mx-4">
              <FaWheelchair size={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
