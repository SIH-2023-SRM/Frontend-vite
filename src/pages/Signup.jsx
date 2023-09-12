import React,{useState} from 'react'
import Signup1 from './Signup1';
import Signup2 from './Signup2';
import Signup4 from './Signup4';
import ProgressBar from '../components/ProgressBar';
import arrow from "../assets/Arrow.png"
import Signup5 from './Signup5';
import Signup3 from './Signup3';

const steps = ['Step 1', 'Step 2', 'Step 3','Step 4','Step 5'];

const Signup = () => {
    const[name,setName]=useState("")
    const[age,setAge]=useState("")
    const[sex,setSex]=useState("")
    const[email,setEmail]=useState("")
    const[mobile,setMobile]=useState("")
    const[blood,setBlood]=useState("")
    const[aadharno,setAadharno]=useState("")
    const[centerid,setCenterId]=useState("")
    const[address,setAddress]=useState("")
    const[pincode,setPincode]=useState("")
    const[state,setState]=useState("")
    const[district,setDistrict]=useState("")
    const[highqualification,setHighQualification]=useState("")
    const[employestatus,setEmployeeStatus]=useState("")
    const[familyincome,setFamilyIncome]=useState("")
    const[maritalstatus,setMaritalStatus]=useState("")
    const[insurancecomp,setInsuranceComp]=useState("")
    const[insurancepolicy,setInsurancePolicy]=useState("")
    const[legalCrime,setLegalCrime]=useState("")
    const[Guardianname,setGuardianName]=useState("")
    const[Guardianemail,setGuardianEmail]=useState("")
    const[Guardianmobile,setGuardianMobile]=useState("")
    const[Guardianaddress,setGuardianAddress]=useState("")
    const[emergencycontact,setEmergencyContact]=useState("")
    const[addictiontype,setAddictionType]=useState("")
    const[addictionduration,setAddictionDuration]=useState("")
    const[wellbeing,setWellBeing]=useState("")
    const[relapse,setRelapse]=useState("")
    const[allergies,setAllergies]=useState("")
    const[mentaldisorder,setMentalDisorder]=useState("")
    const[disability,setDisability]=useState("")
    const[medicalfile,setMedicalFile]=useState(null)

    const [line1,setLine1]=useState("")
    const [line2,setLine2]=useState("")

    // console.log(name,centerid)

    

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
      {currentStep == 1 &&<Signup1 setName={setName} name={name} setAge={setAge} age={age} setSex={setSex} sex={sex} setEmail={setEmail} email={email} setMobile={setMobile} mobile={mobile} setAadharno={setAadharno} aadharno={aadharno} setBlood={setBlood} blood={blood} setCenterId={setCenterId} centerid={centerid} onNext={handleNext}/>}
      {currentStep == 2 &&<Signup2 setAddress={setAddress} setLine1={setLine1} line1={line1} setLine2={setLine2} line2={line2} address={address} setPincode={setPincode} pincode={pincode} setState={setState} state={state} district={district} setDistrict={setDistrict} onNext={handleNext} />}
      {currentStep == 3 &&<Signup3 setHighQualification={setHighQualification} highqualification={highqualification} setEmployeeStatus={setEmployeeStatus} employestatus={employestatus} setFamilyIncome={setFamilyIncome} familyincome={familyincome} setMaritalStatus={setMaritalStatus} maritalstatus={maritalstatus} setInsuranceComp={setInsuranceComp} insurancecomp={insurancecomp} setInsurancePolicy={setInsurancePolicy} insurancepolicy={insurancepolicy} setLegalCrime={setLegalCrime} legalCrime={legalCrime}  onNext={handleNext} />}
      {currentStep == 4 &&<Signup4 setGuardianName={setGuardianName} Guardianname={Guardianname} setGuardianEmail={setGuardianEmail} Guardianemail={Guardianemail} setGuardianMobile={setGuardianMobile} Guardianmobile={Guardianmobile} setGuardianAddress={setGuardianAddress} Guardianaddress={Guardianaddress} setEmergencyContact={setEmergencyContact} emergencycontact={emergencycontact}  onNext={handleNext} />}
      {currentStep == 5 &&<Signup5 name={name} age={age} sex={sex} email={email} mobile={mobile} aadharno={aadharno} blood={blood} centerid={centerid} state={state} district={district} pincode={pincode} address={address} highqualification={highqualification} employestatus={employestatus} familyincome={familyincome} maritalstatus={maritalstatus} insurancecomp={insurancecomp} insurancepolicy={insurancepolicy} legalCrime={legalCrime} emergencycontact={emergencycontact} Guardianaddress={Guardianaddress} Guardianmobile={Guardianmobile} Guardianemail={Guardianemail} Guardianname={Guardianname} setAddictionType={setAddictionType} addictiontype={addictiontype} setAddictionDuration={setAddictionDuration} addictionduration={addictionduration} setWellBeing={setWellBeing} wellbeing={wellbeing} setRelapse={setRelapse} relapse={relapse} setAllergies={setAllergies} allergies={allergies} setMentalDisorder={setMentalDisorder} mentaldisorder={mentaldisorder} setDisability={setDisability} disability={disability} setMedicalFile={setMedicalFile} medicalfile={medicalfile} onNext={handleNext} />}
      
      </div>
    </div>
  )
}

export default Signup
