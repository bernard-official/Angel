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
    <div className='nav-container'>
      <Stack 
      direction='row'
      alignItems='center'
      p={2}
      sx={{position: 'sticky', top: 0, justifyContent:'space-between'}}
      >
        <div className='logo-container' >
          <Link to='/'>
            <img 
            icon='true' src={icon} alt='logo' width= '120h' height='80vh' />
          </Link>
        </div>
          <Link to='/new'><span>New Collections</span></Link>
          <Link to='/men'><span>Men</span> </Link>
          <Link to='/women'><span>Women</span> </Link>
          <Link to='/kids'><span>Kids</span></Link>
        
          <SearchBar />
          <Shopcart />
         

      </Stack>
    </div>
  )
}

export default Navbar

