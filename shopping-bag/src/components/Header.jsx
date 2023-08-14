import {useContext, useState} from 'react'
import { BsCart2 } from 'react-icons/bs';
import ThemeContext from '../context/ThemeContext';
import CartContent from './CartContent';


function Header() {
    const data = useContext(ThemeContext);
    const [isActive, setIsActive] = useState("false") 
    const cartActive = () => {
        setIsActive(isActive==="false" ? "true" : "false");
        console.log(isActive);
    }
    const closeCartBox = () => {
        setIsActive(isActive==="false" ? "true" : "false");
    }
    return (
        <div className="flex flex-row bg-[#ff6a00] p-3" onClick={closeCartBox}>
            <div className="grow text-2xl font-semibold text-white font-sans tracking-wide"><a href="#">Shopping App</a></div>
            <div>
                <div className="relative">
                    <button onClick={cartActive}><BsCart2 className="fill-white w-8 h-8"/></button>
                    <div className="absolute top-[-5px] left-4 text-orange text-sm w-5 h-5 bg-white rounded-full">{data.cartAmount}</div>
                    <div className={`fixed top-0 bg-white w-[300px] h-screen shadow-lg rounded-tl-md rounded-bl-md ease-in-out duration-300 ${isActive === 'true' ? 'right-0' : 'right-[-300px]'}`}>
                    <div className="flex justify-center items-center h-10 bg-[#000000] text-white text-lg mb-4 rounded-tl-md text-center">Sepet Özetim <BsCart2 className="ml-2"/></div>
                        <ul>
                            {
                                data.bag.map((bags)=> {
                                    return (
                                        <CartContent isActive= {isActive} bags={bags}/>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
