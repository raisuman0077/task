import React, {useState,useEffect} from 'react'
import axios from 'axios';

const Task4 = () => {

    const [datas,setDatas] = useState([]);
    const [selectedId, setSelectedId] = useState();
    const [selectedName,setSelectedName] = useState();
    const [selectedStaff,setSelectedStaff]= useState();
    

    useEffect(() => {
        const fetchData = async () => {
            axios.get('staffsData.json')
            .then(res=>{
                
                setDatas(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        fetchData()
      }, []);

    const uniqueStaff = [...new Set(datas.map(data=>data.staffType))];
    const uniqueEntryShift = [...new Set(datas.map(data=>data.shift.entry))];
    const uniqueExitShift = [...new Set(datas.map(data=>data.shift.exit))];
      
 
 
    const handleChange = (e) =>{
        e.preventDefault();
        setSelectedStaff(e.target.value);
    }
    const resetShift =()=>{
        const resetEntry = document.getElementById('entryShift');
        const resetExit = document.getElementById('exitShift');
        resetEntry.value='';
        resetExit.value='';
    }

  return (
    <div className='staffDetail-section'>
    <hr />
    <h1>Staff Details</h1>
    <div className='row g-4 container'>
    <div className='col-md-6'>
        <label htmlFor="validationTooltip04" className="form-label">
            <h4>Staff Type</h4>
        </label>
        <select 
        onChange={(e)=>handleChange(e)} 
        onClick={resetShift}  
        className="form-select" 
        id="validationTooltip04" 
        required>
            <option selected disabled value="">Select staff type</option>
        {uniqueStaff.map((staff,id)=>(
            <option  key={id}>{staff}</option>
        ))}
        </select>
    </div>

    <div className='col-md-6'>
        <label htmlFor="validationTooltip04" className="form-label">
            <h4>Shift</h4>
        </label>
        <select  className="form-select" id="entryShift" required>
            <option selected disabled value="">Select entry shift</option>
            {uniqueEntryShift.map((entry,id)=>(
                <option key={id}>{entry}</option>
                ))}
                </select>
                
        <select  className="form-select mt-1" id="exitShift" required>
            <option  selected disabled value="">Select exit shift</option>
            {uniqueExitShift.map((exit,id)=>(
                <option key={id}>{exit}</option>
            ))}
        </select>
    </div>

    <div className='col-md-6'>
    <label htmlFor="validationTooltip04" className="form-label">
        <h4>ID No.</h4>
    </label>
        {selectedStaff ? <select 
            className="form-select"
            onChange={(e)=>setSelectedId(e.target.value)}  
            value={selectedName}
            id="validationTooltip04" required>
                <option selected disabled value="">Select id</option>
        {datas.filter(data=>data.staffType===selectedStaff).map((d,id)=>(
                <option value={d.fullName} key={id} >{d.rollId}</option>
            ))}
        </select> 
        : <select 
        className="form-select"
        onChange={(e)=>setSelectedId(e.target.value)}  
        value={selectedName}
        id="validationTooltip04" required>
            <option selected disabled value="">Select id</option>
    {datas.map((d,id)=>(
            <option value={d.fullName} key={id} >{d.rollId}</option>
        ))}
    </select> }
    </div>
    
    <div className='col-md-6'>
        <label htmlFor="validationTooltip04" className="form-label">
            <h4>Full Name</h4>
        </label>
        {selectedStaff ? <select 
            className="form-select"
            value={selectedId} 
            onChange={(e)=>setSelectedName(e.target.value)} 
            id="validationTooltip04" 
            required>
                <option selected disabled value="">Select name</option>
            {datas.filter(data=>data.staffType===selectedStaff).map((data,id)=>(
                <option  key={id}>{data.fullName}</option>
            ))}
        </select> : 
        <select 
            className="form-select"
            value={selectedId} 
            onChange={(e)=>setSelectedName(e.target.value)} 
            id="validationTooltip04" required>
                <option selected disabled value="">Select name</option>
            {datas.map((data,id)=>(
                <option  key={id}>{data.fullName}</option>
            ))}
        </select> 
        }
    </div>
    </div>
   
    </div>
  )
}

export default Task4;