import React,{useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import style from '../Private/css/Form.css'

export default function Form(props) {

const changeStudentName = (event) =>{
  setStudentName(event.target.value);
}

const changeRollNumber = (event) =>{
  setRollNumber(event.target.value);
}

const changeFathersName = (event) =>{
  setFathersName(event.target.value);
}

const changeBatchYear = (event) =>{
  setBatchYear(event.target.value);
}

const changeProgramOfStudy = (event) =>{
  setProgramOfStudy(event.target.value);
}

const changeBranchOfStudy = (event) =>{
  setBranchOfStudy(event.target.value);
}

const changeApplicationFor = (event) =>{
  setApplicationFor(event.target.value);
  if(event.target.value=='leave'){
    setApplicationBoolean(false);
    setDocumentSelection('');
    } else {
      setApplicationBoolean(true);
    }
}

const changeDocumentType = (event) =>{
  setDocumentSelection(event.target.value);
}

useEffect (()=> {console.log(documentSelection)});

const changeReason = (event) =>{
  setReason(event.target.value);
}

const changeSemester = (event) =>{
  setSemester(event.target.value);
}

const changeRemarks = (event) =>{
  setRemarks(event.target.value);
}

function formSubmit(e){
  e.preventDefault();
  fetch(``,{
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      studentname: studentName,
      instituterollno: rollNumber,
      fathersname: fathersName
    })
  }). then((data) => {
    data.json();
  }) .then((data) => {
    console.log(data);
  }) .catch((data) => {
    console.log(data);
  })
}

  const [studentName,setStudentName]=useState('');
  const [rollNumber,setRollNumber]=useState('');
  const [fathersName,setFathersName]=useState('');
  const [batchYear,setBatchYear]=useState('');
  const [programOfStudy,setProgramOfStudy]=useState('');
  const [branchOfStudy,setBranchOfStudy]=useState('');
  const [applicationFor,setApplicationFor]=useState('');
  const [reason,setReason]=useState('');
  const [document,setDocument]=useState('');
  const [semester,setSemester]=useState('');
  const [remarks,setRemarks]=useState('');
  const [documentTypeVariable,setDocumentTypeVariable]= useState('');
  const [documentSelection,setDocumentSelection]=useState('');

  // Boolean Variables
  const [applicationBoolean,setApplicationBoolean]= useState(true);

  return (
    <div className='box'>
      <div className="heading">Submit Form</div>
        <form onSubmit={formSubmit} className='form' action="" method='post'>

          {/* Student Name */}
            <div className="form-element">
            <label htmlFor="student-name">Student Name</label>
            <input type="text" autoComplete='off' name='student-name' value={studentName} onChange={changeStudentName} className='field' id="student-name" />
            </div>

          {/* Roll Number */}
            <div className="form-element">
            <label htmlFor="roll-number">Institute Roll Number</label>
            <input type="text" autoComplete='off' name="roll-number" value={rollNumber} onChange={changeRollNumber} className='field' id="roll-number" />
            </div>

          {/* Fathers Name */}
            <div className="form-element">
            <label htmlFor="fathers-name">Father's Name</label>
            <input type="text" autoComplete='off' name="fathers-name" value={fathersName} onChange={changeFathersName} className='field' id="fathers-name" />
            </div>

          {/* Batch Year */}
            <div className="form-element">
            <label htmlFor="batch-year">Batch Year</label>
            <select autoComplete='off' name="batch-year" onChange={changeBatchYear} className='field' id="batch-year" required>
            <option disabled selected value> -- Select an option -- </option>
            <option value="2021-2025">2021-2025</option>
            <option value="2020-2024">2020-2024</option>
            <option value="2019-2023">2019-2023</option>
            <option value="2018-2022">2018-2022</option>
            </select>
            </div>

          {/* Program of Study */}
            <div className="form-element">
            <label htmlFor="program-of-study">Program of Study</label>
            <select autoComplete='off' name="program-of-study" onChange={changeProgramOfStudy} className='field' id="program-of-study">
            <option disabled selected value> -- Select an option -- </option>
            <option value="2021-2025">B.Tech</option>
            <option value="2021-2025">M.Tech</option>
            </select>
            </div>

          {/* Branch of Study */}
            <div className="form-element">
            <label htmlFor="branch-of-study">Branch of Study</label>
            <select autoComplete='off' name="branch-of-study" onChange={changeBranchOfStudy} className='field' id="branch-of-study">
            <option disabled selected value> -- Select an option -- </option>
            <option value="2021-2025">Computer Science & Engineering (CSE)</option>
            <option value="2021-2025">Electronics & Communication Engineering (ECE)</option>
            <option value="2021-2025">Mechatronics Engineering (MEA)</option>
            </select>
            </div>

          {/* Application For */}
            <div className="form-element">
            <label htmlFor="application-for">Application for</label>
            <select autoComplete='off' name="application-for" onChange={changeApplicationFor} className='field' id="application-for">
            <option disabled selected value> -- Select an option -- </option>
            <option value="leave">Leave</option>
            <option value="documents">Documents</option>
            </select>
            </div>
            
          {/* Document */}
          {applicationBoolean?
            <div className="form-element">    {/* This field will appear only when we choose the Document option in the Application for field */}
            <label htmlFor="document-selection">Document</label>
            <select autoComplete='off' name="document-selection" onChange={changeDocumentType} className='field' id="document-selection">
            <option disabled selected value> -- Select an option -- </option>
            <option value="bonafide">Bonafide Certificate</option>
            <option value="fee-receipt">Fee Receipt</option>
            <option value="fee-demand-letter">Fee Demand Letter</option>
            <option value="transcript">Transcript</option>
            <option value="provisional-certificate">Provisional Certificate</option>
            <option value="migration-certificate">Migration Certificate</option>
            <option value="temporary-id-card">Temporary ID-Card</option>
            <option value="other">Other</option>
            </select>
            </div>
          :
          <div className="form-element description">    {/* This field will appear only when we choose the Leave option in the Application for field */}
            <label htmlFor="reason">Reason</label>
            <textarea autoComplete='off' name="reason" value={reason} onChange={changeReason} className='field textarea' id="reason" cols="10" rows="5"></textarea>
            </div>
          }

{(() => {
        if (documentSelection==='bonafide') {
          return (
            <div>
              some field
            </div>
          )
        } else if (documentSelection==='fee-receipt') {
          return (
            <div className="form-element">    {/* This field will appear only when we choose the Fee Receipt or Fee Demand Letter option in the Document field */}
  <label htmlFor="semester">Semester</label>
  <input type="text" autoComplete='off' name="semester" value={semester} onChange={changeSemester} className='field' id="semester" />
  </div>
          )
        } else if (documentSelection==='fee-demand-letter') {
          return (
            <div className="form-element">    {/* This field will appear only when we choose the Fee Receipt or Fee Demand Letter option in the Document field */}
  <label htmlFor="semester">Semester</label>
  <input type="text" autoComplete='off' name="semester" value={semester} onChange={changeSemester} className='field' id="semester" />
  </div>
          )
        } else if (documentSelection==='transcript') {
          return (
            <>
            <div className="form-element">    {/* This field will appear only when we choose the Transcript option in the Application for field */}
     <div>
     Transcript Application Form
     </div>
     <div>
       --Link--
     </div>
   </div>
   <div className="form-element">    {/* This field will appear only when we choose the Migration Certificate or Transcript option in the Application for field */}
    <label htmlFor="semester">Upload Fee Receipt</label>
    <input type="file" autoComplete='off' id="semester" className='field file' name="semester"></input>
    </div>
            </>
          )
        } else if (documentSelection==='provisional-certificate') {
          return (
            <div>
              some field
            </div>
          )
        } else if (documentSelection==='migration-certificate') {
          return (
            <div className="form-element">    {/* This field will appear only when we choose the Migration Certificate or Transcript option in the Application for field */}
    <label htmlFor="semester">Upload Fee Receipt</label>
    <input type="file" autoComplete='off' id="semester" className='field file' name="semester"></input>
    </div>
          )
        } else if (documentSelection==='temporary-id-card') {
          return (
            <div>
              some field
            </div>
          )
        } else if (documentSelection==='other') {
          return (
            <div>
              some field
            </div>
          )
        }
      })()}

            {/*
               Bonafide Certificate --> Purpose in Remark
               Fee Receipt --> Semester in Remark
               Fee Demand Letter --> Purpose and Semester in Remark
               Migration Certificate --> Upload Fee Receipt
               Transcript --> The filled form given, Upload Payment Receipt
            */}

            {/* Two Problems:
            By Default, all fields should be hidden.
            No two fields are displaying simultaneously */}
            
            {/* 
              input verification
              submit btn logic
            */}
            
            <div className="form-element btn-container">
            <button className='btn' type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}