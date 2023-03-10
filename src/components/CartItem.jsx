import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import storeItems from '../Utils/data.json'
import { formatCurrency } from './formatCurrency'
import { useShoppingCart } from './ShoppingCartContext'

export default function CartItem({id, quantity}) {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if(item == null) return null

  return (
    <Stack direction ="horizontal" gap ={2} className= 'd-flex align-items- center'>
        <img src={item.imgUrl}
        style ={{ width:'125px', height:'75px', objectfit:'cover' }}
        />
        <div className='me-auto'>
          <div>
            {item.name}{quantity > 1 && <span 
            className='text-muted' style={{ fontSize:'.65rem'}}>
              {quantity}x
            </span>}
          </div>
          <div className='text-muted' style={{fontSize:'.80rem'}}>
            {formatCurrency(item.price)}
          </div>
        </div>
        <div>
          {formatCurrency(item.price*quantity)}
        </div>
        <Button variant='outline-danger' size='sm' 
        onClick={() => removeFromCart(item.id)}>
          &times;
        </Button>
    </Stack>
 )
}
