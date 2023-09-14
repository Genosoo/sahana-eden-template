import React from 'react'
import LoginImg from '../../../public/home.svg'
import Image from 'next/image'
import Logo from '../../../public/logo.png'

export default function Login() {
  return (
    <div className='loginContainer'>
        <div className="loginLeftContent">
            <div className="loginDetailWrapper">
                <h4>Report an incident now to help keep our</h4>
                <h1>COMMUNITY SAFE</h1>
            </div>
            <Image src={LoginImg} alt='login image' />
        </div>

        <div className="loginRightContent">
            <form>
                <Image src={Logo} alt='logo'/>
                <h2>Login</h2>
                <span>Registered users can login to access the system</span>
                <input type="email" placeholder='Enter Email Address' />
                <input type="password" placeholder='Enter Password' />
                <label>
                    <input type="checkbox" />
                    <h5>Remember me.</h5>
                </label>
            </form>
        </div>
    </div>
  )
}
