import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import MissionComp from "../components/Mission";
import RehabCenter from "../components/Rehab";
import Center from "../components/Center";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="  h-full bg-contain bg-[url('./assets/bg.png')]">
        <Navbar />
        <Home />
        <MissionComp />
        <RehabCenter />
      </div>
      <Center />
      <Newsletter />
      <Footer />
    </>
  );
};

export default LandingPage;
