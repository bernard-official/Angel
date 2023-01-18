import React, { useState } from 'react'
import SideBar from './SideBar'
import { Grid, Stack, Card, Typography  } from '@mui/material'
import { inventories } from '../Utils/categories'
import { useNavigate } from 'react-router-dom'

export default function NewOutfits () {
  let navigate = useNavigate();
   
  const [showInventories, setShowInventories]= useState(false);
  navigate('/new')
 
  return (
    <div className='collection-container'>
            <Typography variant='h4' align='center'>New Collections</Typography> 
            <SideBar width= '30%' />
            <div className='cardCollection-container'>
              <Card></Card>
            </div>
    </div>
  )
}
