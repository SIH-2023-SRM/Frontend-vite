import React from 'react'

const Signup3 = (props) => {
  return (
    <div className=' w-full items-center flex justify-center'>
      <form className=" w-[50%] bg-[url('./assets/loginformbg.png')] bg-cover px-16 py-10 flex flex-col items-center mt-10 mb-16">
          <div className=" font-LeagueGothic text-[#004368] text-2xl font-semibold mb-4">
          SIGN UP TO CONTINUE
          </div>
          <div className='text-left w-full '>Enter patient personal details</div>
          <div className=" shadow-lg my-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="Highest Qualification"
              required
              value={props.highqualification}
              type="text"
              onChange={(e)=>props.setHighQualification(e.target.value)}
            />
          </div>
          <div className=' w-full flex items-center'>
          <div className=" shadow-lg my-2 mr-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="Employement Status"
              required
              value={props.employestatus}
              type="text"
              onChange={(e)=>props.setEmployeeStatus(e.target.value)}
            />
          </div>
          <div className=" shadow-lg my-2 ml-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="Family Income"
              required
              value={props.familyincome}
              type="text"
              onChange={(e)=>props.setFamilyIncome(e.target.value)}
            />
          </div>
          </div>
          <div className=" shadow-lg my-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="marital status"
              required
              value={props.maritalstatus}
              type="text"
              onChange={(e)=>props.setMaritalStatus(e.target.value)}
            />
          </div>
          <div className=" shadow-lg my-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="Insurance Company"
              required
              value={props.insurancecomp}
              type="text"
              onChange={(e)=>props.setInsuranceComp(e.target.value)}
            />
          </div>
          <div className=" shadow-lg my-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="Insurance Policy no"
              required
              value={props.insurancepolicy}
              type="text"
              onChange={(e)=>props.setInsurancePolicy(e.target.value)}
            />
          </div>
          <div className=" shadow-lg my-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="Legal Crime History"
              required
              value={props.legalCrime}
              type="text"
              onChange={(e)=>props.setLegalCrime(e.target.value)}
            />
          </div>
          
          
          
          <button onClick={props.onNext} className=" px-8 py-[0.85rem] bg-[url('./assets/viewbtnbg.png')] bg-cover text-xl text-[#F6F6F6] mt-4 ">
            Continue
          </button>
        </form>
    </div>
  )
}

export default Signup3
