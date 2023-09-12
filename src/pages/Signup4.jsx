import React,{useState} from 'react'

const Signup4 = (props) => {
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [mobileError1, setMobileError1] = useState('');

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
    props.setGuardianEmail(email);

    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleMobileChange = (e) => {
    const mobile = e.target.value;
    props.setGuardianMobile(mobile);

    if (!validateMobile(mobile)) {
      setMobileError('Invalid mobile number');
    } else {
      setMobileError('');
    }
  };
  const handleMobileChange1 = (e) => {
    const mobile = e.target.value;
    props.setEmergencyContact(mobile);

    if (!validateMobile(mobile)) {
      setMobileError1('Invalid mobile number');
    } else {
      setMobileError1('');
    }
  };

  const handleSubmit = () => {
    // Check if all fields are filled and valid
    if (
      props.Guardianname &&
      props.Guardianemail &&
      props.Guardianmobile &&
      props.Guardianaddress &&
      props.emergencycontact &&
      validateEmail(props.Guardianemail) &&
      validateMobile(props.emergencycontact) &&
      validateMobile(props.Guardianmobile)
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
      <form className=" w-[50%] bg-[url('./assets/loginformbg.png')] bg-cover px-16 py-10 flex flex-col items-center mt-10 mb-16">
          <div className=" font-LeagueGothic text-[#004368] text-2xl font-semibold mb-4">
          SIGN UP TO CONTINUE
          </div>
          <div className='text-left w-full '>Guardian details</div>
          <div className=" shadow-lg my-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="name"
              required
              value={props.Guardianname}
              type="text"
              onChange={(e)=>props.setGuardianName(e.target.value)}
            />
          </div>
          <div className=" shadow-lg my-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="email"
              required
              value={props.Guardianemail}
              type="email"
              onChange={handleEmailChange}
            />
          </div>
          {emailError && <p className="text-red-500">{emailError}</p>}
          <div className=" shadow-lg my-2 w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="mobile"
              required
              value={props.Guardianmobile}
              type="tel"
              onChange={handleMobileChange}
            />
          </div>
          {mobileError && <p className="text-red-500">{mobileError}</p>}
          <div className=" shadow-lg my-2  w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="address"
              required
              value={props.Guardianaddress}
              type="text"
              onChange={(e)=>props.setGuardianAddress(e.target.value)}
            />
          </div>
          
          <div className=" shadow-lg my-2  w-full px-3 py-2 bg-white">
            <input
              className=" w-full bg-transparent focus:outline-none "
              placeholder="Emergency Contact no"
              required
              value={props.emergencycontact}
              type="tel"
              onChange={handleMobileChange1}
            />
          </div>
          {mobileError1 && <p className="text-red-500">{mobileError1}</p>}
          
          
          <button onClick={handleSubmit} className=" px-8 py-[0.85rem] bg-[url('./assets/viewbtnbg.png')] bg-cover text-xl text-[#F6F6F6] mt-4 ">
            Continue
          </button>
        </form>
    </div>
  )
}

export default Signup4
