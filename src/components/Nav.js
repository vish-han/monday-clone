import React from 'react'
import logo from '../images/crm-logo.png'
import {useNavigate} from 'react-router-dom'
const Nav = () => {
    const navigate = useNavigate();
  return (
<nav>
    <div className="logo-container"> 
    <img src={logo}></img>
   </div>
    <div className='control-container'>
        <div className='icon' onclick={() => navigate('/title')}>➕</div>
        <div className='icon' onclick={()=>navigate('/')}>🔙</div>
    </div>
</nav>
    
  )
}

export default Nav