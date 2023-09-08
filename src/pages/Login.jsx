import React from "react";

const Login = () => {
  return (
    <div>
      <div className=" w-screen h-screen bg-[url('./assets/loginbg.png')] bg-cover flex flex-col items-center p-20">
        <div className=" font-LeagueGothic text-[#004368] text-5xl font-semibold">
          WELCOME TO NASHA MUKT BHARAT ABHIYAAN
        </div>
        <form className=" w-[50%] bg-[url('./assets/loginformbg.png')] bg-cover p-16 flex flex-col items-center my-16">
          <div className=" font-LeagueGothic text-[#004368] text-2xl font-semibold mb-4">
            LOGIN TO CONTINUE
          </div>
          <div className=" shadow-lg my-4 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="userID"
              type="text"
            />
          </div>
          <div className=" shadow-lg my-4 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="password"
              type="password"
            />
          </div>
          <div className=" my-6 underline font-Raleway">forgot password?</div>
          <button className=" px-8 py-[0.475rem] bg-[url('./assets/viewbtnbg.png')] bg-cover text-xl text-[#F6F6F6] my-2 ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
