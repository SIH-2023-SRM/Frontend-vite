import React from 'react'
import upload from "../assets/upload.png"

const Signup5 = ({onNext}) => {
  return (
    <div className=' w-full items-center flex justify-center'>
     <form className=" w-[50%] bg-[url('./assets/loginformbg.png')] bg-cover px-16 py-10 flex flex-col items-center mt-10 mb-16">
          <div className=" font-LeagueGothic text-[#004368] text-2xl font-semibold mb-4">
          SIGN UP TO CONTINUE
          </div>
          <div className='text-left w-full '>Enter patient details</div>
          <div className=" flex justify-between items-center shadow-lg my-2 w-full p-3 bg-white">
            <div>Upload Government ID proof of the patient</div>
            <input
              className="hidden"
              id="fileInput"
              placeholder="Upload Government ID proof of the patient"
              type="file"
            />
            <label
          htmlFor="fileInput"
          className=" px-3 py-2 rounded-full border flex justify-between items-center cursor-pointer "
        >
          <div className=' mx-1'>Upload</div><div className=' mx-1'><img src={upload} alt=''/></div>
        </label>
          </div>
          <div className=" flex justify-between items-center shadow-lg my-2 w-full p-3 bg-white">
            <div>Upload Government ID proof of the patient</div>
            <input
              className="hidden"
              id="fileInput"
              placeholder="Upload Government ID proof of the patient"
              type="file"
            />
            <label
          htmlFor="fileInput"
          className=" px-3 py-2 rounded-full border flex justify-between items-center cursor-pointer "
        >
          <div className=' mx-1'>Upload</div><div className=' mx-1'><img src={upload} alt=''/></div>
        </label>
          </div>
          <div className=" flex justify-between items-center shadow-lg my-2 w-full p-3 bg-white">
            <div>Upload Government ID proof of the patient</div>
            <input
              className="hidden"
              id="fileInput"
              placeholder="Upload Government ID proof of the patient"
              type="file"
            />
            <label
          htmlFor="fileInput"
          className=" px-3 py-2 rounded-full border flex justify-between items-center cursor-pointer "
        >
          <div className=' mx-1'>Upload</div><div className=' mx-1'><img src={upload} alt=''/></div>
        </label>
          </div>
 
          
          <button onClick={onNext} className=" px-8 py-[0.85rem] bg-[url('./assets/viewbtnbg.png')] bg-cover text-xl text-[#F6F6F6] mt-4 ">
            Continue
          </button>
        </form>
    </div>
  )
}

export default Signup5
