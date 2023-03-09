import React from 'react'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { Button } from 'react-bootstrap';
import { useShoppingCart } from './ShoppingCartContext';

export default function Shopcart() {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <div>
      {cartQuantity > 0 && (  
          <Button 
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
            onClick = { openCart }
          >
            <LocalGroceryStoreOutlinedIcon />
            <div 
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}>
              {cartQuantity}
            </div>
          </Button> 
      )}    
    </div>
  )
}
