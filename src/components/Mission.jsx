import React from "react";
import ellipse1 from "../assets/Ellipse-1.png";
import ellipse2 from "../assets/Ellipse-2.png";
import profile from "../assets/profileicon.png";

function Mission() {
  return (
    <>
      <div className=" relative w-screen h-[70vh] bg-[url('./assets/missionbg.png')] bg-cover overflow-x-clip flex flex-col items-center px-28 py-10">
        <div className=" font-LeagueGothic text-5xl text-[#004368] font-semibold">
          OUR MISSION
        </div>
        <div className=" font-Raleway text-xl my-6">
          Empower patients with the ability to live their life to the fullest
        </div>
        <div className=" w-full grid grid-cols-4 gap-10 my-10">
          <div className=" w-full h-full flex flex-col  bg-[url('./assets/bg-card.png')] bg-cover items-center p-4">
            <div className="  w-28 h-28 rounded-full bg-[#004368] flex justify-center items-center">
              <img className="" src={profile} alt="" />
            </div>
            <div className=" font-Raleway text-[#006198] text-2xl font-semibold">
              33599257 +
            </div>
            <div className=" font-semibold text-sm mt-2 mb-4 text-center font-Raleway text-[#006198]">
              YOUTH REACHED OUT
            </div>
          </div>
          <div className=" w-full h-full flex flex-col  bg-[url('./assets/bg-card.png')] bg-cover items-center p-4">
            <div className="  w-28 h-28 rounded-full bg-[#004368] flex justify-center items-center">
              <img className="" src={profile} alt="" />
            </div>
            <div className=" font-Raleway text-[#006198] text-2xl font-semibold">
              22424923 +
            </div>
            <div className=" font-semibold text-sm mt-2 mb-4 text-center font-Raleway text-[#006198]">
              WOMEN REACHED OUT
            </div>
          </div>
          <div className=" w-full h-full flex flex-col  bg-[url('./assets/bg-card.png')] bg-cover items-center p-4">
            <div className="  w-28 h-28 rounded-full bg-[#004368] flex justify-center items-center">
              <img className="" src={profile} alt="" />
            </div>
            <div className=" font-Raleway text-[#006198] text-2xl font-semibold">
              325632 +
            </div>
            <div className=" font-semibold text-sm mt-2 mb-4 text-center font-Raleway text-[#006198]">
              EDUCATIONAL INSTITUTIONS COVERED
            </div>
          </div>
          <div className=" w-full h-full flex flex-col  bg-[url('./assets/bg-card.png')] bg-cover items-center p-4">
            <div className="  w-28 h-28 rounded-full bg-[#004368] flex justify-center items-center">
              <img className="" src={profile} alt="" />
            </div>
            <div className=" font-Raleway text-[#006198] text-2xl font-semibold">
              105965599 +
            </div>
            <div className=" font-semibold text-sm mt-2 mb-4 text-center font-Raleway text-[#006198]">
              TOTAL PEOPLE REACHED OUT
            </div>
          </div>
        </div>
        <div className=" absolute top-[-10%] left-[-5%] overflow-x-hidden rounded-full w-56 h-56 bg-[#EFEFEF]">
          <img
            className=" absolute h-[80%] top-[10%] overflow-x-hidden left-[30%] "
            src={ellipse1}
            alt=""
          />
        </div>
        <div className=" absolute bottom-[-20%] right-[-5%] rounded-full w-56 h-56 bg-[#EFEFEF]">
          <img
            className=" absolute h-[80%] overflow-x-hidden  bottom-[10%] right-[25%] "
            src={ellipse2}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Mission;
