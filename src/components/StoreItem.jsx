import React from 'react'
import { Card } from 'react-bootstrap'
import storeItems from '../Utils/data.json'
import { formatCurrency } from './formatCurrency'

export default function StoreItem({ id, name, category, price, imageUrl } = storeItems ) {
 
  return (
    <div>
      <Card>
        <Card.Img 
        varient="top"
        src={imageUrl}
        height='200px'
        style={{ objectFit:'cover'}}
        />
        <Card.Body className='d-flex flex-column'>
          <Card.Title className='d-flex justify-content-between align-items-baseline
          mb-4'>
            <span className='fs-2'>{name}</span>
            <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}
