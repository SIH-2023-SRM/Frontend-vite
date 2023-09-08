import React from "react";
import scan from "../assets/footerscan.png";
import call from "../assets/Call.png";
import mail from "../assets/Mail.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import insta from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";

function Footer() {
  return (
    <>
      <div className=" w-full h-full bg-[url('./assets/footerbg.png')] bg-cover px-12 py-8 grid grid-cols-5">
        <div className=" col-span-3 flex flex-col items-start">
          <div className="font-LeagueGothic font-semibold text-white  text-4xl mb-5">
            CONTACT US
          </div>
          <div className=" flex items-center mb-2 mt-4">
            <div>
              <img src={call} alt="" />
            </div>
            <div className=" font-Raleway text-xl font-light text-white mx-2">
              Dhaivat Vipat - (+91-6265052301)
            </div>
          </div>
          <div className=" flex items-center mt-2 mb-6">
            <div>
              <img src={mail} alt="" />
            </div>
            <div className=" font-Raleway text-xl font-light text-white mx-3">
              envision@aaruush.org
            </div>
          </div>
          <div className=" text-white font-Raleway font-semibold text-xl flex items-center my-3">
            <div>Follow us now:</div>
            <div className=" mx-2">
              <img src={linkedin} alt="" />
            </div>
            <div className=" mx-2">
              <img src={youtube} alt="" />
            </div>
            <div className=" mx-2">
              <img src={insta} alt="" />
            </div>
            <div className=" mx-2">
              <img src={facebook} alt="" />
            </div>
            <div className=" mx-2">
              <img src={twitter} alt="" />
            </div>
          </div>
          <div className=" font-Raleway font-light text-white mt-4">
            © <span className=" underline">All Rights Reserved.</span>
          </div>
        </div>
        <div className=" col-span-2 flex flex-col items-center">
          <div className=" font-LeagueGothic font-semibold text-white w-full text-2xl text-center mb-3">
            TOLL FREE DEADDICTION HELPLINE: 14446
          </div>
          <div>
            <img src={scan} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
