import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { Message} from './store/actions/messages'
const Calculate = () => {
  const dispatch = useDispatch()
  const [Q1,setQ1] = useState('')
  const handleSubmit =()=>{
    if (parseInt(Q1)===4){
    dispatch(Message("Great Work! Keep it up","200"))  
    }
    else if(Q1===""){
    dispatch(Message("Blank Input! Please Enter Some number","300"))  
    }
    else
    dispatch(Message("Ops! Improve it and better luck next time","400"))      
  }
    return ( 
        <div>
          <br/><br/><br/>
          <p><strong>Q:1.</strong>&nbsp;&nbsp;&nbsp;&nbsp;2 + 2 = ?</p>
          <input type="text" value={Q1} onChange={(e)=>setQ1(e.target.value)}/>
          <br/><br/>
          <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </div>
     );
}
 
export default Calculate;