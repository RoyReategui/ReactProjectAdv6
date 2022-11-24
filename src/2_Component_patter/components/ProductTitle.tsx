//Alternativa a no crear un interface, de esta manera le decimos que el title es obligatorio

import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface Props{
    title?:string;
    className?: string;
    style? : React.CSSProperties
}

//Nota: si existiera mas propiedades, se recomienda hacer una interfaz
export const ProductTitle = ( { title, className, style }: Props )=>{
    const { product } = useContext( ProductContext);

    const titleShow = title? title : (product.title)? product.title : '';   

    return(
        <span 
            className={ `${styles.productDescription} ${ className }` }
            style={ style }
        >
                { titleShow }
        </span>
    )
}
