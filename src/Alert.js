import React, {Fragment,useEffect,useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {ClearMessage} from './store/actions/messages'
import $ from 'jquery' 
const Alert = () => {
    const dispatch = useDispatch()
    const status = useSelector(state=>state.messages.status)
    const msg = useSelector(state=>state.messages.msg)
    const [alertClass,setalertClass] = useState('')
    const [Header,setHeader] = useState('')
    useEffect(()=>{
        if (status){
            if(status==="300"){
                setalertClass("alert alert-warning alert-dismissible text-center")
                setHeader("Warning")
            }
            if(status==="200"){
                setalertClass("alert alert-success alert-dismissible text-center")
                setHeader("Success")
            }
            else if(status==="400"){
                setalertClass("alert alert-danger alert-dismissible text-center")
                setHeader("Error")
            }
            setTimeout(function() {
                $('#message').fadeOut('slow');
                setTimeout(function() {
                    dispatch(ClearMessage())
                }, 1000)    
            }, 3000)
        }   
    })
    return ( 
        <Fragment>
        {status
        ?
        <div id="message">
            <div className="container">
                <div className={alertClass} role="alert">
                    <button type="button" onClick={()=>dispatch(ClearMessage())} className="close" data-dismiss="alert">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <strong>
                        {Header} :&nbsp;&nbsp;
                    </strong>
                        {msg}
                </div>
            </div>
        </div>
        :
        null
    }
    </Fragment>
    );
}
 
export default Alert;