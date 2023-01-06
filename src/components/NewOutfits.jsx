import React from 'react'
import SideBar from './SideBar'
import { Grid, Stack } from '@mui/material'

export default function NewOutfits () {
  return (
    <div>
        <Grid>
            NEW COLLECTIONS
            <Stack sx={{flexDirection: { sx: 'column', md:'row'}}}
            >
              <SideBar />
            </Stack>
        </Grid>
      
    </div>
  )
}
