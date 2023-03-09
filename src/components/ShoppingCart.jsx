import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from './ShoppingCartContext'

import CartItem from './CartItem'
import { formatCurrency } from './formatCurrency'
import storeItems from '../Utils/data.json'


export default function ShoppingCart({ isOpen }) {
    const { closeCart, cartItems } = useShoppingCart
  return (
    <Offcanvas show ={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack>
                {cartItems.map(item =>(
                    <CartItem key={id} {...item} />
                ))}
                <div>
                    {formatCurrency( 
                        cartItems.reduce((total,cartItem) => {
                        const item = storeItems.find(i => i.id === cartItem.id)
                        return total + (item?. price || 0) * cartItem.quantity
                        },0)
                    )}
                </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  )
}
