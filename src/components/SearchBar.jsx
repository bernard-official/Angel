import React from 'react'
import { Paper, IconButton, Fab } from '@mui/material'
import { Search } from '@mui/icons-material'  

function SearchBar() {
  return (
    <Fab variant='extended'
     component={'form'}
     sx= {{
        borderRadius: 20,
        border:'px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }
     }}
    >
        <input className='search-bar'
        type='text'
        placeholder='search...'
        />
        <IconButton type='submit'>
            <Search/>
        </IconButton>
    </Fab>
  )
}

export default SearchBar
