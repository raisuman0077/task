import React, {useState} from 'react'

const Task2 = () => {
  
  const [phoneNumber,setPhoneNumber] = useState('');

  function phoneNumberValidation(phoneNumber){
    if(!phoneNumber){
      return<div>wait for result...</div>;
    }else{
      if(phoneNumber.length ===10){
        if(phoneNumber.slice(0,3)!=='981'){
          return<div>Invalid Nepali Carrier</div>
        }else{
          return<div>Valid</div>
        }
      }else{
        return<div>Invalid length</div>
      }
    }
  }

  const result = phoneNumberValidation(phoneNumber);

  return (
    <>
    <form className='mt-5 mb-4'>
    <hr />
      <h1>Phone Number Validation</h1>
      <h4>Phone Number:  </h4>
      <input
        type='number'
        placeholder='Phone number'
        value={phoneNumber}
        onChange={(e)=>setPhoneNumber(e.target.value)}
        required 
      />
    </form>
    <h5>{result}</h5>
    </>
    )
}

export default Task2;