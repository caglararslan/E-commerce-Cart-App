import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
import { BsCart2 } from 'react-icons/bs';

function CartContent({isActive, bags}) {
    const data = useContext(ThemeContext);
    return (
        <li key={bags.id} className="text-xl mb-2 font-medium">{bags.title} {bags.price}₺</li>
    )
}

export default CartContent
