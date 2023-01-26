import React from 'react'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { IconButton } from '@mui/material';

export default function Shopcart() {
  return (
    <div>  
          <IconButton position='relative' 
          sx={{ }} >
            <LocalGroceryStoreOutlinedIcon />
            <div className='picked-item'>3</div>
          </IconButton> 
    </div>
  )
}
