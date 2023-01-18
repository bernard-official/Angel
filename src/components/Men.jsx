import { Typography } from '@mui/material'
import React from 'react'
import { inventories } from '../Utils/categories'

export default function Men() {
  
  return (
    <div className='collection-container'>
      <Typography>MEN</Typography>
      <div>
        {inventories.reduce(inventory => inventory.name)}
      </div>
      
    </div>  
  )
}
