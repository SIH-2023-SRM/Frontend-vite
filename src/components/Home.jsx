import React from "react";

function Home() {
  return (
    <>
      <div className=" w-full h-[88vh] grid grid-cols-2 justify-center items-center px-16">
        <div className="">
          <div className=" font-LeagueGothic text-[#004368] w-full h-full flex flex-col justify-center items-center font-semibold text-5xl">
            <div className=" my-1">WELCOME TO NASHA </div>
            <div className=" my-1">MUKT BHARAT ABHIYAAN</div>
          </div>
          <div className=" w-full border-2 border-[#004368] mx-2 my-4 "></div>
          <div className=" text-xl text-justify font-light mx-2 ">
            Ministry of Social Justice & Empowerment which is the Nodal Ministry
            for Drug Demand Reduction has formulated and launched Nasha Mukt
            Bharat Abhiyaan (NMBA) on 15th August 2020, in 272 Districts across
            32 State/Union Territories identified as most vulnerable in terms of
            usage of drugs in the country. These vulnerable districts were
            identified on the basis of findings from the Comprehensive National
            Survey and the inputs provided by the Narcotics Control Bureau
            (NCB).
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
