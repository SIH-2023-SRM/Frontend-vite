import React from "react";
import group from "../assets/group.png"

function Rehab() {
  return (
    <>
      <div className="  w-full lg:h-[110vh] xl:h-screen  2xl:h-[90vh] flex flex-col items-center px-28 py-10">
        <div className=" font-LeagueGothic text-4xl font-semibold text-[#004368]">
          NASHA MUKT BHARAT ABHIYAAN REHABILITATION CENTRES
        </div>
        <div className=" w-[60%] my-2 border-2 border-[#004368]  flex justify-center items-center"></div>
        <div className=" font-Raleway text-xl ">
          Join the Movement Towards a Substance-Free India
        </div>
        <div className=" w-full h-full grid grid-cols-2">
          <div className="my-16"><img src={group} alt="" /></div>
          <div className=" w-full flex flex-col py-10">
            <div className=" w-full flex flex-col my-6">
              <div className=" font-semibold font-Raleway text-xl">
                Your path to recovery
              </div>
              <div className=" font-Raleway text-xl font-light">
                Welcome to the Nasha Mukt Bharat Abhiyaan Rehabilitation
                Centers, your haven for hope and healing. We stand at the
                forefront of the national movement to create a substance-free
                India, and our centers are your trusted partners on the journey
                to recovery.
              </div>
            </div>
            <div className=" w-full flex flex-col my-6">
              <div className=" font-semibold font-Raleway text-xl">
                A Beacon of Support and Transformation
              </div>
              <div className=" font-Raleway text-xl font-light">
                Our rehabilitation centers are not just facilities; they are
                beacons of support, understanding, and transformation. We
                recognize that addiction is a formidable challenge, affecting
                individuals from all walks of life. Our centers are committed to
                providing a safe, nurturing, and empowering environment for
                those seeking to break free from the shackles of addiction.
              </div>
            </div>
            <div className=" w-full flex flex-col my-6">
              <div className=" font-semibold font-Raleway text-xl">
                Confidentiality and Respect
              </div>
              <div className=" font-Raleway text-xl font-light">
                Your privacy is paramount to us. We uphold strict
                confidentiality standards, ensuring that your personal
                information and journey to recovery are treated with the utmost
                respect and discretion.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rehab;
