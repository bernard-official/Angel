import React from 'react'
import { Typography } from '@mui/material'
import Navbar from './Navbar'
import StoreItem from './StoreItem'
import storeItems from '../Utils/data.json'
import { Col, Row } from 'react-bootstrap'

export default function NewOutfits () {

  return (
    <>
      <Navbar position="sticky" /> 
      <Typography variant='h4' align='center'>New Collections</Typography> 
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item)=>(
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
 