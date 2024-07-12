import { useRef, useState } from 'react'
import './login.css'
import ModalLogin from '../ModalLogin'
import Register from '../register/register'
export const Login = () => {
  const condition = ModalLogin()
  const [modal, setModal] = useState(true)
  const loginFunc = () => {
    setModal(!modal)
    console.log(modal);
  }
  console.log(modal);

  const [regLogin, setRegLogin] = useState(false)
  const regLoginFunc = () => {
    setRegLogin(!regLogin)
  }

  if(modal){
    document.body.classList.add('active-modal')
  }else{
    document.body.classList.remove('active-modal')

  }
  
   if (!regLogin  ) {
      
        return <>
        <div>
        {modal && (
          <div className="login">
          <div className='login-background'></div>
          <div className="login-cover">
            <div className="login-title-box">
              <p className='login-txt'>Login</p>
              <button type='button' onClick={loginFunc} className="login-cancel">&times;</button>
            </div>
            <form action="post" className="login-form">
              <label className='login-label'>Username or Phone</label>
              <input required className='login-input' type="text"  placeholder="Username or Phone"/>
              <label className='login-label'>Password</label>
              <input required className='login-input' type="password" placeholder='Password'/>
              <button className='login-btn' onClick={loginFunc}  type="button">Log In</button>
            </form>
            <p className='login-switch'>Do not have an account? <button className='switch-btn'onClick={regLoginFunc}> Register Now</button> | <button className='switch-btn' onClick={regLoginFunc}>Forgot Password ?</button></p>
          </div>
        </div>
        )}
       </div>
        </>
      
   }else{
    return <Register/>
   }
  
}