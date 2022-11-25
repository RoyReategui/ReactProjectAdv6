import { ProductButtons , ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css'
import { Product } from '../interfaces/interfaces';
import { useState } from 'react';

import { products } from '../data/products'
import { useShoppingCard } from '../hooks/useShoppingCart'



export const ShoppingPage = () => {

  const { shoppingCart, onProductChange } = useShoppingCard();


  return (
    <div style={{ overflow : 'auto' }}>
        <h1>Shopping Store</h1>
        <hr />

        <div
          style={{
             display:'flex',
             flexDirection: 'row',
             flexWrap: 'wrap'
          }}
        >

          {
            products.map( product =>(
              <ProductCard
                key={product.id} 
                product={ product }
                className="bg-dark p10 text-white"
                onChange={ onProductChange }
                value = { shoppingCart[product.id]?.count || 0 }
                // value= { shoppingCart[product.id] && shoppingCart[product.id].count}
              >
                <ProductImage className="custom-image"/>
                <ProductTitle className="text-bold" />
                <ProductButtons className="custom-buttons" />
              </ProductCard>
            ))
          }
        </div>
        <div>
            {
              JSON.stringify( shoppingCart )
            }
        </div>

        <div 
          className="shoping-cart">
          {

            Object.values( shoppingCart ).map(product =>(
              <ProductCard
                key={product.id}  
                product={ product }
                className="bg-dark p10 text-white"
                style={{ width: 'initial' }}
                value= { product.count }
                onChange={ onProductChange }
              >
                <ProductImage className="custom-image"  style={{ width: '100px' }} />
                <ProductButtons 
                  className="custom-buttons"
                  style={{ display:'flex', justifyContent:'center' }}
                  />
              </ProductCard>

            ))

          }
        </div>
    </div>
  )
}


export default ShoppingPage;
