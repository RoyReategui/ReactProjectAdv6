import { ProductButtons , ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css'


const product = {
  id: '1',
  title : 'Coffee Mug - Card',
  img :'./coffee-mug.png'
}


export const ShoppingPage = () => {
  return (
    <div >
        <h1>Shopping Store</h1>
        <hr />

        <div
          style={{
             display:'flex',
             flexDirection: 'row',
             flexWrap: 'wrap'
          }}
        >

          <ProductCard product={ product }
            className="bg-dark p10 text-white"
          >
            <ProductImage className="custom-image"/>
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>


          <ProductCard product={ product }
            className="bg-dark p10 text-white"
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title title={"Hola Papu"} />
            <ProductCard.Buttons className="custom-buttons" />

          </ProductCard>

          <ProductCard product={ product } style={{ backgroundColor : '#7b1fa2'  }}>
            <ProductCard.Image />
            <ProductCard.Title title={"Hola Papu"} />
            <ProductCard.Buttons  style={{ backgroundColor: 'white' }} />

          </ProductCard>

          
        </div>
    </div>
  )
}


export default ShoppingPage;
