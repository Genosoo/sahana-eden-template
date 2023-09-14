"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
    BsFillGridFill,
    BsFillBuildingsFill,
    BsFillPersonFill,
    BsFillPeopleFill,
    BsFillDiagram3Fill,
    BsBarChartLineFill,
    BsFillPersonLinesFill,
    BsFillMapFill,
    BsFillGrid1X2Fill,
    BsClipboard2Fill,
    BsTruckFrontFill,
    BsExclamationOctagonFill
 } from 'react-icons/bs'
const menuItem = [
    {
        path:"/dashboard",
        name:"Dashboard",
        icon:<BsFillGridFill/>
    },
    {
        path:"/organizations",
        name:"Organizations",
        icon:<BsFillBuildingsFill/>
    },
    {
        path:"/staff",
        name:"Staff",
        icon:<BsFillPersonFill/>
        
    },

    {
        path:"/volunteers",
        name:"Volunteers",
        icon:<BsFillPeopleFill/>
        
    },

    {
        path:"/projects",
        name:"Projects",
        icon:<BsFillDiagram3Fill/>
        
    },

    {
        path:"/assets",
        name:"Assets",
        icon:<BsBarChartLineFill/>
    },
    {
        path:"/assessments",
        name:"Assessments",
        icon:<BsFillPersonLinesFill/>
    },
    {
        path:"/map",
        name:"Map",
        icon:<BsFillMapFill/>
    },
    {
        path:"/contentmanagement",
        name:"Content Management",
        icon:<BsFillGrid1X2Fill/>
    },
    {
        path:"/documents",
        name:"Documents",
        icon:<BsClipboard2Fill/>
    },
    {
        path:"/vehicles",
        name:"Vehicles",
        icon:<BsTruckFrontFill/>
    },
    {
        path:"/requests",
        name:"Requests",
        icon:<BsExclamationOctagonFill/>
    },
   
]

export default function Menu() {
    const pathname = usePathname()

  return (
    <div className='mobileMenu'>
        {menuItem.map((item, index)=>(
        <Link href={item.path} key={index} >
              <div className={`mobileLink ${pathname === item.path ? 'activeMenu' : ''}`}>
              <div className="icon">{item.icon}</div>
                <span className='name'>{item.name.slice(0, 11)}</span>
              </div>
                
        </Link>
        ))}
    </div>
  )
}
