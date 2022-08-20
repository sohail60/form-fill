const application_for=document.getElementById('application-for');
const reason=document.getElementById('reason-div');
const document_div=document.getElementById('document-div');
const document_list=document.getElementById('document-selection');
const semester=document.getElementById('semester-div');
const transcript=document.getElementById('transcript-div');
const fee_reciept=document.getElementById('fee-reciept-div');
const submit=document.getElementById('btn');
console.log('Prog Running');


application_for.addEventListener('change',function(e){
    console.log('application for running');
    if(application_for.value==='leave'){
        let value=application_for.value;
        reason.classList.remove('hidden');
        document_div.classList.add('hidden');
        semester.classList.add('hidden');
        transcript.classList.add('hidden');
        fee_reciept.classList.add('hidden');
    }

    if(application_for.value==='documents'){
        document_div.classList.remove('hidden');
        reason.classList.add('hidden');
        semester.classList.add('hidden');
        transcript.classList.add('hidden');
        fee_reciept.classList.add('hidden');
    }
});

document_list.addEventListener('change',function(e){
    console.log('document list running');
    if(document_list.value==='bonafide'){
        semester.classList.remove('hidden');
        fee_reciept.classList.remove('hidden');
    }
    
    if(document_list.value==='fee-receipt'){
        console.log('fee-receipt selected')
        semester.classList.remove('hidden');
        transcript.classList.add('hidden');
        fee_reciept.classList.add('hidden');
    }
    
    if(document_list.value==='fee-demand-letter'){
        semester.classList.remove('hidden');
        transcript.classList.add('hidden');
        fee_reciept.classList.add('hidden');
    }
    
    if(document_list.value==='transcript'){
        transcript.classList.remove('hidden');
        fee_reciept.classList.remove('hidden');
        semester.classList.add('hidden');
    }
    
    
    if(document_list.value==='provisional-certificate'){
        fee_reciept.classList.remove('hidden');
    }
    
    if(document_list.value==='migration-certificate'){
        fee_reciept.classList.add('hidden');
    }
    
    if(document_list.value==='temporary-id-card'){
        semester.classList.remove('hidden');
        fee_reciept.classList.remove('hidden');
    }
    
    if(document_list.value==='others'){
        
    }
})

submit.addEventListener('click',function(e){
    formSubmit(e);
})

function formSubmit(e){
    e.preventDefault();
    fetch(``,{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      auth_token: localStorage.getItem(),
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