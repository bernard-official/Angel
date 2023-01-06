import React from 'react';
import { Link } from 'react-router-dom';
import { Stack,Avatar, Typography, Grid } from '@mui/material';
import icon from '../images/Angel.jpg';

import NewOutfits from './NewOutfits';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import SearchBar from './SearchBar';


function Navbar() {
  return (
    <div className='nav-container'>
      <Stack 
      direction='row'
      alignItems='center'
      p={2}
      sx={{position: 'sticky', top: 0, justifyContent:'space-between'}}
      >
        <div clasName='logo-container' >
        <Link to='/'><Avatar 
          icon='true' src={icon} alt='logo' size= "large"        />
          <Typography variant='h5' sx={{align:'left'}}>
            Angel Ash
          </Typography></Link>
        </div>

        <Link to='/new'> <NewOutfits /></Link>
        <Link to='/men'><Men /></Link>
        <Link to='women'> <Women /></Link>
        <Link to='kids'><Kids /></Link> 
        <SearchBar />

      </Stack>
    </div>
  )
}

export default Navbar

