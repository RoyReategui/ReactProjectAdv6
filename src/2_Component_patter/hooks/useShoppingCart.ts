import React from 'react'
import { useState } from 'react';
import { ProductInCart, Product } from '../interfaces/interfaces';

export const useShoppingCard = () => {

    const [ shoppingCart, setShoppingCart] = useState<{ [key:string] : ProductInCart}>({})

    const onProductChange = ( { count, product } : { count: number, product: Product } )=>{

        setShoppingCart( prev =>{

        const productInCard : ProductInCart = prev[product.id] || { ...product, count: 0 }

        if( Math.max( productInCard.count+count, 0 ) > 0 ){
            productInCard.count += count;
            return{
            ...prev,
            [product.id] : productInCard
            }
        }

        //Borramos el producto
        const { [product.id]: toDelete, ...rest  } = prev;
        return {...rest};




        // if( count === 0 ){
        //   const { [product.id]: toDelete, ...rest  } = prev;
        //   return rest;
        // }

        // return{
        //   ...shoppingCart,
        //   [product.id] : { ...product, count}
        // };

        })
    }

    return { shoppingCart, onProductChange }
}
