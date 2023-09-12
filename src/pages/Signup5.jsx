import React,{useState} from 'react'
import upload from "../assets/upload.png"

const Signup5 = (props) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        props.setMedicalFile(file);
      };
  return (
    <div className=' w-full items-center flex justify-center'>
     <form className=" w-[50%] bg-[url('./assets/loginformbg.png')] bg-cover px-16 py-5 flex flex-col items-center mt-10 mb-16">
          <div className=" font-LeagueGothic text-[#004368] text-2xl font-semibold mb-4">
          SIGN UP TO CONTINUE
          </div>
          <div className='text-left w-full '>Enter patient details</div>
          <div className=" shadow-lg my-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="addiction type"
              required
              value={props.addictiontype}
              type="text"
              onChange={(e)=>props.setAddictionType(e.target.value)}
            />
          </div>
          <div className=" shadow-lg my-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="addiction duration"
              required
              value={props.addictionduration}
              type="text"
              onChange={(e)=>props.setAddictionDuration(e.target.value)}
            />
          </div>
          <div className=" shadow-lg my-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="Well Being"
              required
              value={props.wellbeing}
              type="text"
              onChange={(e)=>props.setWellBeing(e.target.value)}
            />
          </div>
        
          <div className=' w-full flex items-center'>
          <div className=" shadow-lg my-2 mr-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="relapse"
              required
              value={props.relapse}
              type="text"
              onChange={(e)=>props.setRelapse(e.target.value)}
            />
          </div>
          <div className=" shadow-lg my-2 ml-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="allergies"
              required
              value={props.allergies}
              type="text"
              onChange={(e)=>props.setAllergies(e.target.value)}
            />
          </div>
          </div>
          <div className=' w-full flex items-center'>
          <div className=" shadow-lg my-2 mr-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="mental disorders"
              required
              value={props.mentaldisorder}
              type="text"
              onChange={(e)=>props.setMentalDisorder(e.target.value)}
            />
          </div>
          <div className=" shadow-lg my-2 ml-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="disability"
              required
              value={props.disability}
              type="text"
              onChange={(e)=>props.setDisability(e.target.value)}
            />
          </div>
          </div>
         
          <div className=" flex justify-between items-center shadow-lg my-2 w-full p-3 bg-white">
            <div>Medication Document{props.medicalfile &&<span className=' mx-2 text-xs text-red-500'>{props.medicalfile.name}</span>}</div>
            <input
              className="hidden"
              id="fileInput"
              placeholder="Upload Government ID proof of the patient"
              required
              
              onChange={handleFileChange}
              type="file"
            />
            <label
          htmlFor="fileInput"
          className=" px-3 py-2 rounded-full border flex justify-between items-center cursor-pointer "
        >
          <div className=' mx-1'>Upload</div><div className=' mx-1'><img src={upload} alt=''/></div>
        </label>
          </div>
          
          <button  className=" px-8 py-[0.64rem] bg-[url('./assets/viewbtnbg.png')] bg-cover text-xl text-[#F6F6F6] mt-4 ">
            Submit
          </button>
        </form>
    </div>
  )
}

export default Signup5
