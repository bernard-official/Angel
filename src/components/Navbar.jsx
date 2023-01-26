import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Grid } from '@mui/material';
import icon from '../images/Angel.png';

import NewOutfits from './NewOutfits';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import SearchBar from './SearchBar';
import Shopcart from './Shopcart';


function Navbar() {
  return (
    <div className='nav-container' position='sticky'>
      <Stack 
      direction='row'
      alignItems='center'
      p={2}
      sx={{ position: 'sticky', top: 0, justifyContent:'space-between' }}
      >
        <div className='logo-container' >
          <Link to='/'>
            <img 
            icon='true' src={icon} alt='logo' width= '100vh' height='80vh' />
          </Link>
        </div>
          <a href='/new'><h2>New Collections</h2></a>
          <a href='/men'><h2>Men</h2></a>
          <a href='/women'><h2>Women</h2></a>
          <a href='/kids'><h2>Kids</h2></a>
        
          <SearchBar />
          <Shopcart />
         

      </Stack>
    </div>
  )
}

export default Navbar

