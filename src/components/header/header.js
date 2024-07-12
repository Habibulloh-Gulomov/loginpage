
import { Login } from '../login/login'
import { NavLink,Link } from 'react-router-dom'
import Logo from'../../img/logo.svg'
import './header.css'
import phoneicon from '../../img/Icon.png'
import { useState } from 'react'
import ModalLogin from '../ModalLogin'

const Header = () => {
  const condition = ModalLogin()
  const [modal, setModal] = useState(condition)
  
  const loginFunc = () => {
   setModal(!modal)
  }
  return (
     <div>
        <div className="container">
      <div className='header'>
        <Link className='account-logo' to={'/'}><img width={150} height={36} src={Logo} alt="" /></Link>
       <nav className='header-nav'>
       <NavLink className={'account-link'} to={'/'}>Home</NavLink>
       <NavLink className={'account-link'} to={'/ielts'}> IELTS</NavLink>  
       <NavLink className={'account-link'} to={'/modules'}>Modules</NavLink>  
       <NavLink className={'account-link'} to={'/business'}>For Businessess</NavLink>  
       </nav>
       
        <button type='button'  className='login-btn' onClick={loginFunc}>Log In</button>

        <a href='https://docs.google.com/forms/d/e/1FAIpQLSex2yS6LkgnBH5lvjEaa7rwOYRSmbk0-Ng--MidxQBfX8rmqw/viewform' className="contact">Contact Us <img src={phoneicon} alt="" /></a>
   </div>
    </div>
    {
      !modal && <Login />
    }
     </div>
  )
}

export default Header