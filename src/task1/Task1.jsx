import React,{useState} from 'react'

const Task1 = () => {

    const [version,setVersion]= useState({
        firstVersion: null,
        secondVersion: "",
    });
    
    function checkVersion(firstVersion,secondVersion){
        return (firstVersion<secondVersion) ? <div><h2>First version is smaller.</h2></div> 
        : (firstVersion>secondVersion) ? <div> first version is greater.</div> 
        : (firstVersion === secondVersion) ? <div>first version and second version is equal.</div>
        :<div> Please input the values.</div>
    }

    const result = checkVersion(version.firstVersion,version.secondVersion);
    
    const handleInput=(e)=>{
        e.preventDefault();
        setVersion({...version,[e.target.name]:e.target.value})
    }

    const handleSubmit =(e)=>{
    e.preventDefault();
    setVersion({firstVersion:'',secondVersion:''})
    
}
  return (
    <div className='form-section mt-5'>
    <h1 className='resutl'>Live Result: {result}</h1>
    <form className='form-input row'>
        <div className='col-md-2'>
            <h3>First version</h3>
            <input 
                type='text' 
                placeholder='Enter first version'
                name='firstVersion' 
                value={version.firstVersion} 
                onChange={handleInput}
                
            />
        </div>

        <div className='col-md-2'>
            <h3>Second Version</h3>
            <input 
                type='text' 
                placeholder='Enter second version'
                name='secondVersion' 
                value={version.secondVersion} 
                onChange={handleInput} 
            />
        </div>
    </form>
    </div>
  )
}

export default Task1;