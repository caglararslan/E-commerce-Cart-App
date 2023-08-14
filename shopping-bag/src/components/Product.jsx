import {useContext, useEffect} from 'react'
import { BsBag } from 'react-icons/bs';
import ThemeContext from '../context/ThemeContext'

function Product({product}) {
    const dataContext = useContext(ThemeContext);
    const addToCartFunction = () => {
        const checkBag = dataContext.bag.find(item => item.id == product.id)
        if(checkBag) {
            checkBag.amount +=1
            dataContext.setBag([...dataContext.bag.filter(item => item.id !== product.id), checkBag])
        } else {
            dataContext.setBag([...dataContext.bag, {
                id: product.id,
                amount: 1,
            }])
        }
        dataContext.setCartAmount(dataContext.cartAmount+=1);
        dataContext.setBag([...dataContext.bag,product])
    }
    return (
        <div className="border-2 border-black-500 p-1 rounded hover:border-orange-600 transition delay-50 duration-300 ease-in-out" key={product.id}>
            <div><img src={product.image} alt="" className="aspect-square"/></div>
            <div className="text-black font-semibold mb-2 h-[22px]">{product.title}</div>
            <div className="tex-black font-medium mb-2">{product.price} ₺</div>
            <div>
                <button onClick={addToCartFunction} className="w-full bg-[#ff6a00] text-yellow-100 p-2 rounded hover:bg-orange-600 transition delay-50 duration-300 ease-in-out">SEPETE EKLE</button>
            </div>
        </div>
    )
}

export default Product
