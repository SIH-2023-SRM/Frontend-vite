import React from 'react'

const Signup3 = ({onNext}) => {
  return (
    <div className=' w-full items-center flex justify-center'>
      <form className=" w-[50%] bg-[url('./assets/loginformbg.png')] bg-cover px-16 py-10 flex flex-col items-center mt-10 mb-16">
          <div className=" font-LeagueGothic text-[#004368] text-2xl font-semibold mb-4">
          SIGN UP TO CONTINUE
          </div>
          <div className='text-left w-full '>Guardian details</div>
          <div className=" shadow-lg my-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="name"
              type="text"
            />
          </div>
          <div className=" shadow-lg my-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="email"
              type="email"
            />
          </div>
          <div className=" shadow-lg my-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="mobile"
              type="tel"
            />
          </div>
          <div className=' w-full flex items-center'>
          <div className=" shadow-lg my-2 mr-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="financial status"
              type="text"
            />
          </div>
          <div className=" shadow-lg my-2 ml-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="yearly income"
              type=""
            />
          </div>
          </div>
          
          
          <button onClick={onNext} className=" px-8 py-[0.85rem] bg-[url('./assets/viewbtnbg.png')] bg-cover text-xl text-[#F6F6F6] mt-4 ">
            Continue
          </button>
        </form>
    </div>
  )
}

export default Signup3
