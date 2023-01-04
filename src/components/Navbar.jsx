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
        <div clasName='logo-container'>
          <Avatar 
          icon='true' src={icon} alt='logo' size= "large"        />
          <Typography variant='h1' sx={{align:'left'}}>
            <Link to='/'>Angel Ash</Link>
          </Typography>
        </div>

        
         <NewOutfits />  
         <Men />
         <Women />
         <Kids />
        <SearchBar />

      </Stack>
    </div>
  )
}

export default Navbar

