import { Login } from "../login/login";
import ModalLogin from "../ModalLogin";
import { useState } from "react";
import './register.css'

const Register = () => {
  const condition = ModalLogin()
  const [modal, setModal] = useState(condition)
  
  const loginFunc = () => {
    setModal(!modal)
  }
  
  const [sms, setSms] = useState(false)

  const smsFunc = () => {
    setSms(true)
  }
  return (
<>
{modal && <div className="login">
    <div className='login-background'></div>
    <div className="login-cover">
      <div className="login-title-box">
        <p className='login-txt'>Register</p>
        <button type='button' onClick={loginFunc}  className="login-cancel">&times;</button>
      </div>
     <>
     {!sms &&  
     <>
      <form action="post" className="login-form">
        <label className='login-label'>Phone Number</label>
        <input className='login-input'  type="number"  placeholder="+998"/>
        <button className='login-btn'  type="button" onClick={smsFunc}>Send code</button>
        </form>
        <p className='login-switch'> <input type="checkbox" /> I agree to the  <a href="https://docs.google.com/document/d/1wkmp7D62nlnsYpw9giZ9cu2FEtTKjcI3nmczsijLimw/edit#heading=h.gjdgxs"> Terms of Use</a> Already have a account? <button className='switch-btn'>Login</button></p>
        </>}
     </>
        <>
        
        {sms && (   
          <>
            <p>Enter the code we sent you</p>
             <form className="login-sms-box">
             <input type="text" placeholder="0" className="login-sms" />
             <input type="text" placeholder="0" className="login-sms" />
             <input type="text" placeholder="0" className="login-sms" />
             <input type="text" placeholder="0" className="login-sms" />
             <input type="text" placeholder="0" className="login-sms" />
             <input type="text" placeholder="0" className="login-sms" />
             </form>
          </>
        )}
        </>
     
      
    </div>
  </div>}

</>  )
}

export default Register