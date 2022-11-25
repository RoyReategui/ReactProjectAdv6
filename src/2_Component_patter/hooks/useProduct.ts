
import { useState, useEffect, useRef } from 'react';
import { Product, onChangeArg } from '../interfaces/interfaces';

interface useProducArgs{
    product: Product;
    onChange?: ( args: onChangeArg )=> void;
    value?: number
}


export const useProduct = ( { onChange, product, value=0 }:useProducArgs ) => {

    const [counter, setcounter] = useState(value);

    const isController = useRef( !!onChange );

    const reset = ()=> setcounter(0);

    const increaseBy = ( value: number )=>{

        if( isController.current ){
            return onChange!( { count:value, product } )
        }
        
        const newValue = Math.max( counter + value, 0 );
        setcounter( newValue )

        onChange && onChange({ count:newValue, product });
   }

   useEffect(() => {
     setcounter( value )
   }, [value])
   
 
    return  { counter, increaseBy , reset }
}
