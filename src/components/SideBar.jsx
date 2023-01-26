import React from 'react'
import { Table, TableRow, Stack } from '@mui/material'
import { inventories } from '../Utils/categories'



export default function SideBar( {showInventories,setShowInventories} ) {
  return (
    <div>
      <Stack 
      directons = 'row'
      sx={{
        overflow: 'auto',
        height:{ sx:'auto',bd:'95%'},
        flexDirection: {md:'column'},

      }}>
           { inventories.map((inventory) =>(
            <Table>
              <TableRow>
              <button
            className='inventory'
            /**line below is suppose show name of inventory */
            onClick={()=>setShowInventories(inventory.products)}
            >
              { inventory.name }
            </button>
              </TableRow>
            </Table>
           ) ) }
      </Stack>
    </div>
  )
}
