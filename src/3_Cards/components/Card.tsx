import styles from '../styles/styles.module.css'
import { CardImage } from './CardImage'
import { CardTitle } from './CardTitle'
import { productoContexProps, productoProps } from '../interfaces/interfaces';
import { createContext } from 'react';


export const ProductoContext = createContext({} as productoContexProps)
const { Provider } = ProductoContext;

export const Card = ( {producto, children }: productoProps ) => {


  return (
    <Provider value={{ producto }}>

      <div className={ styles.card }>
        { children}   
      </div>
   
    </Provider>
  )


}
