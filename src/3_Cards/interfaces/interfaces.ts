import { ReactElement } from 'react';


export interface productoContexProps{
    producto: Producto
} 

export interface productoProps{
    children?: ReactElement | ReactElement[],
    producto: Producto
} 

export interface Producto{
    id : string;
    title: string;
    img?:string
} 
