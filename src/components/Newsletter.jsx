import React from "react";

function Newsletter() {
  return (
    <>
      <div className="w-full h-[70vh] bg-[url('./assets/newsletterbg.png')] bg-cover  flex flex-col items-center justify-center px-28 py-10">
        <div className=" font-LeagueGothic text-4xl my-2 font-semibold text-[#004368]">
          Sign up for the Newsletter
        </div>
        <div className=" font-Raleway text-xl font-light w-[75%] text-center ">
          Subscribe to stay updated on the monthly activities being conducted
          for the Nasha Mukt Bharat Abhiyaan across the country!
        </div>
        <div className=" bg-[url('./assets/newsinputbg.png')] bg-cover w-[75%] p-[1.02rem]  my-6 ">
          <input
            className=" w-full bg-transparent focus:outline-none placeholder:font-Raleway placeholder:text-xl"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <button className=" px-12 py-[1.6rem] bg-[url('./assets/viewbtnbg.png')] bg-cover text-3xl text-[#F6F6F6] my-2 ">
          Subscribe
        </button>
      </div>
    </>
  );
}

export default Newsletter;
