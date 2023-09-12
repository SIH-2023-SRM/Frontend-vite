import React, { useState } from 'react'

const Signup1 = (props) => {
    const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');

  const validateEmail = (email) => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(email);
  };

  const validateMobile = (mobile) => {
    const mobilePattern = /^[0-9]{10}$/;
    return mobilePattern.test(mobile);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    props.setEmail(email);

    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleMobileChange = (e) => {
    const mobile = e.target.value;
    props.setMobile(mobile);

    if (!validateMobile(mobile)) {
      setMobileError('Invalid mobile number');
    } else {
      setMobileError('');
    }
  };

  const handleSubmit = () => {
    // Check if all fields are filled and valid
    if (
      props.name &&
      props.age &&
      props.sex &&
      props.email &&
      props.mobile &&
      props.blood &&
      props.aadharno &&
      props.centerid &&
      validateEmail(props.email) &&
      validateMobile(props.mobile)
    ) {
      // All fields are valid, continue to the next step
      props.onNext();
    } else {
      // Display an error message or prevent submission
      console.error('Form is incomplete or has invalid fields.');
    }
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
              placeholder="name"
              type="text"
              required
              value={props.name}
              onChange={(e)=>props.setName(e.target.value)}
            />
          </div>
          <div className=' w-full flex items-center'>
          <div className=" shadow-lg my-2 mr-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="age"
              type="text"
              required
              value={props.age}
              onChange={(e)=>props.setAge(e.target.value)}
            />
          </div>
          <div className=" shadow-lg my-2 ml-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="sex"
              type="text"
              required
              value={props.sex}
              onChange={(e)=>props.setSex(e.target.value)}
            />
          </div>
          </div>
          <div className=" shadow-lg my-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="email"
              type="email"
              required
              value={props.email}
              onChange={handleEmailChange}
            />
          </div>
          {emailError && <p className="text-red-500">{emailError}</p>}
          <div className=" shadow-lg my-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="mobile"
              type="tel"
              required
              value={props.mobile}
              onChange={handleMobileChange}
            />
          </div>
          {mobileError && <p className="text-red-500">{mobileError}</p>}
          <div className=' w-full flex items-center'>
          <div className=" shadow-lg my-2 mr-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="blood grp"
              type="text"
              required
              value={props.blood}
              onChange={(e)=>props.setBlood(e.target.value)}
            />
          </div>
          <div className=" shadow-lg my-2 ml-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="aadhar no"
              type="text"
              required
              value={props.aadharno}
              onChange={(e)=>props.setAadharno(e.target.value)}
            />
          </div>
          </div>
          <div className=" shadow-lg my-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="Center ID"
              type="text"
              required
              value={props.centerid}
              onChange={(e)=>props.setCenterId(e.target.value)}
            />
          </div>
          
          
          <button onClick={handleSubmit} className=" px-8 py-[0.85rem] bg-[url('./assets/viewbtnbg.png')] bg-cover text-xl text-[#F6F6F6] mt-4 ">
            Continue
          </button>
        </form>
    </div>
  )
}

export default Signup1
