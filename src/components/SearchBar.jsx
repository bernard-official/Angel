import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton, Fab } from '@mui/material'
import { Search } from '@mui/icons-material'  


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()

    if( searchTerm ){
      navigate(`/search/${searchTerm}`)

      setSearchTerm('')
    }
  };

  return (
    <Fab variant='extended'
     component={'form'}
     onSubmit={handleSubmit}
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
        value = {searchTerm}
        onChange={(e)=>{ setSearchTerm(e.target.value)}}
        />
        <IconButton type='submit' sx={{p:"10px", color: ''}}>
            <Search/>
        </IconButton>
    </Fab>
  )
}

export default SearchBar
