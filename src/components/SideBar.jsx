import React from 'react'
import { ButtonGroup, Stack } from '@mui/material'



export default function SideBar() {
  return (
    <div>
      <Stack 
      directons= 'row'
      sx={{
        overflow: 'auto',
        height:{ sx:'auto',bd:'95%'},
        flexDirection: {md:'column'},

      }}>
        <ButtonGroup
         orientation="vertical"
         aria-label="vertical contained button group"
         variant="text"
        > 
            <button key= 'one'>Gender </button>
            <button key= 'two'> Kids</button>
            <button key= 'three'>Shop by Price </button>
        </ButtonGroup>
      </Stack>
    </div>
  )
}
