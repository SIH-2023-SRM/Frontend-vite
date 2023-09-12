import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import upload from "../assets/upload.png"
import axios from 'axios';

const Signup5 = (props) => {

    const [uploading, setUploading] = useState(false);
    const [url,setUrl]=useState("");

    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        props.setMedicalFile(file);
      };


      const handleSubmit = async (event) => {
        event.preventDefault();

    
          const userObject = {
            patientName: props.name,
            age: props.age,
            sex: props.sex,
            bloodGroup: props.blood,
            email: props.email,
            phone: props.mobile,
            aadharNo: props.aadharno,
            address: props.address,
            district: props.district,
            pincode:props.pincode,
            state: props.state,
            maritalStatus: props.maritalstatus,
            guardianName: props.Guardianname,
            guardianPhone: props.Guardianmobile,
            guardianEmail: props.Guardianemail,
            guardianAddress: props.Guardianaddress,
            emergencyContactNo: props.emergencycontact,
            addictionType: props.addictiontype,
            addictionDuration: props.addictionduration,
            relapse: props.relapse,
            allergies: props.allergies,
            medicationDocURL: url,
            wellBeingVal: props.wellbeing,
            mentaldisorders: props.mentaldisorder,
            disability: props.disability,
            highestQualification: props.highqualification,
            employmentStatus: props.employestatus,
            familyIncome: props.familyincome,
            insuranceCompany: props.insurancecomp,
            insurancePolicyNo: props.insurancepolicy,
            legalandCrimeHistory: props.legalCrime,
            centerId: props.centerid
          };
                try {
                 const response = await fetch("http://10.4.213.190:8000/users/register", {
                method: "POST",
                body: JSON.stringify(userObject),
                headers: {
                  "Content-Type": "application/json",
                },
              })
                  const data = await response.json();
                  if(data.result==="data added Successfully"){
                    navigate('/')
                  }
                  console.log(data);
          
                } catch (error) {
                  console.error(error);
                }
        
      };
  

    const handlefile = async (event) => {
        event.preventDefault();
        if(!props.medicalfile){
          return;
        }
        const formData = new FormData();
       
        
          formData.append(`file`, props.medicalfile);
        
        console.log("fileForm",formData)
        try {
            setUploading(true);
          const response = await fetch('http://10.4.213.190:8000/users/upload', {
            method: 'POST',
            body: formData,
            
          });
          const data = await response.json();
          
          console.log(data);
          setUrl(data.url)
          console.log(uploading)
          

        } catch (error) {
          console.error(error);
          setUploading(false);
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
              name='medicalfile'
              onChange={handleFileChange}
              type="file"
            />
            {!props.medicalfile && !uploading ?<label
          htmlFor="fileInput"
          className=" px-3 py-2 rounded-full border flex justify-between items-center cursor-pointer "
        >
          <div className=' mx-1'>Select File</div><div className=' mx-1'><img src={upload} alt=''/></div>
        </label>:!uploading?<button onClick={handlefile}>Upload</button>:<button>done</button>}
          </div>
          
          <button onClick={handleSubmit}  className=" px-8 py-[0.64rem] bg-[url('./assets/viewbtnbg.png')] bg-cover text-xl text-[#F6F6F6] mt-4 ">
            Submit
          </button>
        </form>
    </div>
  )
}

export default Signup5
