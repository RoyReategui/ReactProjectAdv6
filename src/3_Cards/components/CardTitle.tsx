import { useContext } from 'react';
import { ProductoContext } from './Card';


export const CardTitle = ({ title='' }:{ title?:string }) => {
  const { producto } = useContext( ProductoContext )

  let titleShow = ''
  if(title) titleShow = title
  else if( producto.title ) titleShow = producto.title

  return (
    <h2>{ titleShow }</h2>
  )
}
