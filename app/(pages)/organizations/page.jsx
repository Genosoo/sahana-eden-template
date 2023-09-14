"use client"
import React from 'react'
import Search from './Search/Search'
import Table from './Table/Table'
import Menu from './Accordion/AccordionMenu'
import { motion } from "framer-motion"
import ExportButton from './ExportButton/ExportButton'

export default function Organizations() {
  return (
    <motion.div 
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     transition={{ duration: 0.75, ease: "easeOut" }}
     className='orgContainer'
    >
      <h1 className='title'>Organizations</h1>
        <div className="orgContent-1">
          <Search />
          <Table />
          <ExportButton />
        </div>
        <div className='orgContent-2'>
         <Menu />
        </div>
    </motion.div>
  )
}
