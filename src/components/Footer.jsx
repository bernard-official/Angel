import React from 'react'
import { Box, Stack, Card, MenuList, MenuItem } from '@mui/material' 
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material'


function Footer() {
  return (
    <div className='footer-container'>
        <Box>
            <Stack
            direction={'row'}
            sx={{ overflow:'auto', 
            border: 1,
            color: 'GrayText',
            backgroundColor: 'black', 
             }}>
                <Card sx={{
                    color: 'GrayText',
                    backgroundColor: 'black',
                    
                }}>
                    <MenuList>
                        <MenuItem>GIFT CARDS</MenuItem>
                        <MenuItem>SIGN UP FOR EMAIL</MenuItem>
                    </MenuList>
                </Card>
                
                <Card sx={{
                    color: 'GrayText',
                    backgroundColor: 'black',
                }}>
                    <h3>HELP</h3>
                    <MenuList>
                        <MenuItem>Contact us</MenuItem>    
                        <MenuItem>Shipping and Delivery</MenuItem>
                        <MenuItem>Order Status</MenuItem>
                        <MenuItem>Payment Options</MenuItem>
                    </MenuList> 
                </Card>
                
                <Card sx={{
                    color: 'GrayText',
                    backgroundColor: 'black',
                }}>
                    <h3>Social Media</h3>
                    <MenuList>
                        <MenuItem>
                            <a href='facebook.com'><Facebook/></a>
                            <a href='twitter.com'><Twitter/></a>
                            <a href='instagram.com'><Instagram/></a>
                            <a href=''><YouTube/></a>
                        </MenuItem>
                    </MenuList>   
                </Card>
            </Stack>
        </Box>
    </div>
  )
}

export default Footer
