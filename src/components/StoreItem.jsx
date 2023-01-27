import React from 'react'
import { Card } from 'react-bootstrap'
import storeItems from '../Utils/data.json'


const StoreItem = () =>{
  const {id, name, category, price, imageUrl} = storeItems
 
  return <>  
    <Card>
      <Card.Img 
      varient="top"
      src={item.imageUrl}
      height='200px'
      style={{ objectFit:'cover'}}
      />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-flex justify-content-between align-items-baseline
        mb-4'>
          <span className='fs-2'>{item.name}</span>
          <span className='ms-2 text-muted'>{item.price}</span>
        </Card.Title>
      </Card.Body>
    </Card>
</>
}

export default StoreItem;