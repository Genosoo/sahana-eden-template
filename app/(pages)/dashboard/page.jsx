"use client"
import React from 'react'
import Cards from './Cards/Cards'
import Table from './Table/Table'
import { motion } from "framer-motion"

export default function Dashboard() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     transition={{ duration: 0.75, ease: "easeOut" }}
     className='dashboardContainer'
    >
      <h1 className='title'>Dashboard</h1>
      <Cards />
      <Table />
    </motion.div>
  )
}
