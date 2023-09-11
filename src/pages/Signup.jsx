import React,{useState} from 'react'
import Signup1 from './Signup1';
import Signup2 from './Signup2';
import Signup3 from './Signup3';
import Signup4 from './Signup4';
import ProgressBar from '../components/ProgressBar';
import arrow from "../assets/Arrow.png"
import Signup5 from './Signup5';

const steps = ['Step 1', 'Step 2', 'Step 3','Step 4','Step 5'];

const Signup = () => {
    const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1);
      }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
        setCurrentStep(currentStep - 1);
      }
  };
  return (
    <div className=' relative'>
        <div className=' absolute top-10 left-10'>
            <button onClick={handlePrev} className=' w-16 h-16 flex items-center justify-center bg-[#A3CCE3] rounded-full'><img className=' object-contain' src={arrow} alt=''/></button>
        </div>
        
      <div className=" w-screen h-screen bg-[url('./assets/loginbg.png')] bg-cover flex flex-col items-center px-20 py-12">
        <div className=" font-LeagueGothic text-[#004368] text-5xl font-semibold">
          WELCOME TO NASHA MUKT BHARAT ABHIYAAN
        </div>
        <div className=' w-[80%] flex items-center justify-center mt-10'><ProgressBar steps={steps} currentStep={currentStep} /></div>
      {currentStep == 1 &&<Signup1 onNext={handleNext}/>}
      {currentStep == 2 &&<Signup2 onNext={handleNext} />}
      {currentStep == 3 &&<Signup3 onNext={handleNext} />}
      {currentStep == 4 &&<Signup4 onNext={handleNext} />}
      {currentStep == 5 &&<Signup5 onNext={handleNext} />}
      </div>
    </div>
  )
}

export default Signup
