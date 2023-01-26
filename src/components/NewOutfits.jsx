import React, { useState } from 'react'
import SideBar from './SideBar'
import { Card, Typography, CardContent, Box, Grid  } from '@mui/material'
import Navbar from './Navbar'
import storeItems from '../Utils/data.json'

export default function NewOutfits () {

  return (
    <>
    <div className='collection-container'>
      <Navbar position="sticky" /> 
      <Typography variant='h4' align='center'>New Collections</Typography> 
      <div className='sideBar-card-container'>
        { storeItems.map((item)=>(
          <div className='grid-container'>
              <Card 
              sx={{ width:{  xs:'100%', sm:'358px', md:'500px'}, height:{xs:'40%',sm:'358px', md:'500px'}, boxShadow:'5'}}>
               {JSON.stringify(item)}
              </Card>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
 