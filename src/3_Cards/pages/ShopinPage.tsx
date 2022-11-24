import styles from '../styles/styles.module.css';
import { Card } from '../components/Card';
import { CardImage } from '../components/CardImage';
import { CardTitle } from '../components/CardTitle';


const Producto = {
    id : '1',
    title:'Hola pures',
    img: './coffee-mug.png'
}
                                                                                                                                                                       

export const ShopinPage = () => {
  return (
    <div className={ styles.container }>
        <h1>Card Page</h1>
        <hr />
        <div className={styles.cardContainer } >
            <Card producto={ Producto } >
              <CardImage />
              <CardTitle />
            </Card>
            
        </div>

    </div>
  )
}


export default ShopinPage;