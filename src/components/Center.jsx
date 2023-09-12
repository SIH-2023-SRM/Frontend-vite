import React, { useState } from "react";
import location from "../assets/Location.png";
import mapImg from "../assets/mapImg.png"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { TfiLocationPin } from "react-icons/tfi";
import down from "../assets/downarrow.png";
import downarrow from "../assets/arrowdown.png";
import up from "../assets/uparrow.png";
import search from "../assets/search.png";

function Center() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(true);

  return (
    <>
      <div className=" w-full h-[15vh] flex flex-col items-center px-16 py-10 bg-[#EFEFEF]">
        <div className=" font-LeagueGothic text-4xl my-2 font-semibold text-[#004368]">
          FIND A REHABILITATION CENTRE
        </div>
      </div>
      <div className=" relative w-full h-[170vh] bg-[url('./assets/centerbg.png')] bg-cover flex flex-col items-center px-28 py-10">
        <div className=" absolute top-[-2.5%] my-4 w-[60%] bg-[url('./assets/searchbg.png')] bg-cover flex items-center px-5 py-[0.4rem] rounded-full ">
          <div>
            <img src={search} alt="" />
          </div>
          <div className=" mx-2 w-full">
            <input
              className=" w-full bg-transparent focus:outline-none"
              type="text"
              placeholder="Search by city, district or state"
            />
          </div>
        </div>
        <div className=" w-full h-[70vh]">
          <div className=" w-full my-10 flex justify-around items-center ">
            <div className=" w-[15%] bg-[url('./assets/locationbg.png')] bg-cover flex justify-between items-center px-3 py-[0.74rem] ">
              <div className=" text-xl">State</div>
              <div>
                <img src={down} alt="" />
              </div>
            </div>
            <div className=" w-[15%] bg-[url('./assets/locationbg.png')] bg-cover flex justify-between items-center px-3 py-[0.74rem]  ">
              <div className=" text-xl">District</div>
              <div>
                <img src={down} alt="" />
              </div>
            </div>
            <div className=" w-[15%] bg-[url('./assets/locationbg.png')] bg-cover flex justify-between items-center px-3 py-[0.67rem]  ">
              <div className=" text-xl">Near Me</div>
              <div className=" ">
                <TfiLocationPin size={30} />
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center">
          <div className="h-[50vh] w-[60%] ">
      <MapContainer
        center={[28.6139, 77.2090]} // Initial map center coordinates
        zoom={10} // Initial zoom level
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[28.6139, 77.2090]}>
          <Popup>
            A sample marker at <br /> Latitude: 28.6139.505, Longitude: 77.2090
          </Popup>
        </Marker>
      </MapContainer>
    </div>
    </div>
        </div>
        <div className=" w-full h-screen flex flex-col items-center">
          <div className=" font-LeagueGothic text-4xl mt-2 mb-4 font-semibold text-[#004368]">
            FAQs
          </div>
          <div className=" font-Raleway w-[80%] bg-[url('./assets/faqbg.png')] flex flex-col items-center bg-cover py-10 px-12 my-4">
            <div className=" w-full flex items-center justify-between ">
              <div className=" font-semibold text-xl text-[#3E3E3E]">
                What is rehabilitation, and who is it for?
              </div>
              <div>
                {!open1 ? (
                  <img onClick={() => setOpen1(true)} src={downarrow} alt="" />
                ) : (
                  <img onClick={() => setOpen1(false)} src={up} alt="" />
                )}
              </div>
            </div>
            {open1 && (
              <div className=" text-xl font-light mt-4 mb-2">
                Rehabilitation is a medical process aimed at helping individuals
                recover from physical or mental health conditions or addiction.
                It is for anyone who needs specialized care and support to
                regain their independence and well-being after an injury,
                illness, surgery, or substance abuse problem.
              </div>
            )}
          </div>
          <div className=" font-Raleway w-[80%] bg-[url('./assets/faqbg.png')] flex flex-col items-center bg-cover py-10 px-12 my-4">
            <div className=" w-full flex items-center justify-between ">
              <div className=" font-semibold text-xl text-[#3E3E3E]">
                What is rehabilitation, and who is it for?
              </div>
              <div>
                {!open2 ? (
                  <img onClick={() => setOpen2(true)} src={downarrow} alt="" />
                ) : (
                  <img onClick={() => setOpen2(false)} src={up} alt="" />
                )}
              </div>
            </div>
            {open2 && (
              <div className=" text-xl font-light mt-4 mb-2">
                Rehabilitation is a medical process aimed at helping individuals
                recover from physical or mental health conditions or addiction.
                It is for anyone who needs specialized care and support to
                regain their independence and well-being after an injury,
                illness, surgery, or substance abuse problem.
              </div>
            )}
          </div>
          <div className=" font-Raleway w-[80%] bg-[url('./assets/faqbg.png')] flex flex-col items-center bg-cover py-10 px-12 my-4">
            <div className=" w-full flex items-center justify-between ">
              <div className=" font-semibold text-xl text-[#3E3E3E]">
                What is rehabilitation, and who is it for?
              </div>
              <div>
                {!open3 ? (
                  <img onClick={() => setOpen3(true)} src={downarrow} alt="" />
                ) : (
                  <img onClick={() => setOpen3(false)} src={up} alt="" />
                )}
              </div>
            </div>
            {open3 && (
              <div className=" text-xl font-light mt-4 mb-2">
                Rehabilitation is a medical process aimed at helping individuals
                recover from physical or mental health conditions or addiction.
                It is for anyone who needs specialized care and support to
                regain their independence and well-being after an injury,
                illness, surgery, or substance abuse problem.
              </div>
            )}
          </div>
          <button className=" px-12 py-5 bg-[url('./assets/viewbtnbg.png')] bg-cover text-3xl text-[#F6F6F6] my-2 ">
            View All
          </button>
        </div>
      </div>
    </>
  );
}

export default Center;
