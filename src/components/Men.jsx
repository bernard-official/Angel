import { Typography } from '@mui/material'
import React from 'react'
import { Row } from 'react-bootstrap'
import { inventories } from '../Utils/categories'
import Navbar from './Navbar'

export default function Men() {
  
  return (
    <div className='collection-container'>
      <Navbar position='sticky'/>
      <Typography variant='h4' align='center' >MEN</Typography>
      <Row md={2} xs={1} lg={3} className=" mt-2 g-3">
        1
      </Row> 
    </div>  
  )
}
