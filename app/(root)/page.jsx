import React from "react";
import Image from "next/image";
import HomeImg from '../../public/home.svg'
import Link from "next/link";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeContent">
        <span className="homeDetailWrapper">
          <h3>Report an incident now  to help keep our</h3>
          <h1>COMMUNITY SAFE</h1>
        </span>
        <Image src={HomeImg} alt="home image" />
        <Link className="homeBtn" href={'/login'}>Sign in or Register now</Link>
      </div>
      
  </div>
  )
  
}
