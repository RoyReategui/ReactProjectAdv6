import nologo from  '../assets/no-image.jpg';
import { useContext } from 'react';
import { ProductoContext } from './Card';

export const CardImage = ({ img='' }:{ img?:string }) => {
  const { producto } = useContext( ProductoContext );

  let showimage = nologo;
  if(img) showimage = img;
  else if(producto.img) showimage = producto.img
  
  
  return (
    <img src={ showimage } alt="logo" />
  )
}
