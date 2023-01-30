import { Typography } from '@mui/material'
import React from 'react'
import { inventories } from '../Utils/categories'
import Navbar from './Navbar'

export default function Men() {
  
  return (
    <div className='collection-container'>
      <Navbar position='sticky'/>
      <Typography>MEN</Typography>
      
      <div>
        {inventories.reduce(inventory => inventory.name)}
      </div>
      
    </div>  
  )
}
