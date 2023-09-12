import React, {useState} from 'react'

const Signup2 = (props) => {
    

    const handleSubmit = () => {
        props.setAddress(props.line1+props.line2)
        props.onNext();
    }

  return (
    <div className=' w-full items-center flex justify-center'>
      <form className=" w-[50%] bg-[url('./assets/loginformbg.png')] bg-cover px-16 py-10 flex flex-col items-center mt-10 mb-16">
          <div className=" font-LeagueGothic text-[#004368] text-2xl font-semibold mb-4">
          SIGN UP TO CONTINUE
          </div>
          <div className='text-left w-full '>Enter address</div>
          <div className=" shadow-lg my-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="line 1"
              required
              value={props.line1}
              type="text"
              onChange={(e)=>props.setLine1(e.target.value)}
            />
          </div>
          <div className=" shadow-lg my-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="line 2"
              value={props.line2}
              type="text"
              onChange={(e)=>props.setLine2(e.target.value)}
            />
          </div>
          <div className=" shadow-lg my-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="pincode"
              required
              value={props.pincode}
              type="text"
              onChange={(e)=>props.setPincode(e.target.value)}
            />
          </div>
          <div className=' w-full flex items-center'>
          <div className=" shadow-lg my-2 mr-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="State"
              required
              value={props.state}
              type="text"
              onChange={(e)=>props.setState(e.target.value)}
            />
          </div>
          <div className=" shadow-lg my-2 ml-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="District"
              required
              value={props.district}
              type="text"
              onChange={(e)=>props.setDistrict(e.target.value)}
            />
          </div>
          </div>
          
          
          <button onClick={handleSubmit} className=" px-8 py-[0.85rem] bg-[url('./assets/viewbtnbg.png')] bg-cover text-xl text-[#F6F6F6] mt-4 ">
            Continue
          </button>
        </form>
    </div>
  )
}

export default Signup2
