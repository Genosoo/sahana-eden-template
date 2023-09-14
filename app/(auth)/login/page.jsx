import React from 'react'
import LoginImg from '../../../public/home.svg'
import Image from 'next/image'
import Logo from '../../../public/logo.png'
import Link from 'next/link'

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
                <input className='credInput' type="email" placeholder='Enter Email Address' />
                <input className='credInput' type="password" placeholder='Enter Password' />
                <label>
                   <div className='rememberBox'>
                   <input type="checkbox" />
                    <p>Remember me.</p>
                   </div>

                   <a href="/">Forgot password?</a>
                </label>

                <div className="loginBtnWrapper">
                    <Link href={"/dashboard"} className='button btn-1'>Sign In</Link>
                    <Link href={"/"} className='button btn-2'>Register</Link>
                </div>
            </form>
        </div>
    </div>
  )
}
