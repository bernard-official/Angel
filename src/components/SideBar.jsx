import React from 'react'
import { ButtonGroup, Stack } from '@mui/material'
import { inventories } from '../Utils/categories'



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
           { inventories.map((inventory) => inventory.name) }
        </ButtonGroup>
      </Stack>
    </div>
  )
}
