import Product from './Product'
import products from '../products.json'

function ProductList() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-2 p-4">
            {
                products.map(product => {
                    return (
                        <Product key={product.id} product={product}/>
                    )
                })
            }
        </div>
    )
}

export default ProductList
