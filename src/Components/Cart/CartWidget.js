import { useEffect, useState } from 'react';
import { IoMdCart } from 'react-icons/io';
import { BiShoppingBag } from 'react-icons/bi';

import { CartContextUse } from '../../Contexts/CartContext';
import { DarkContextUse } from '../../Contexts/DarkContext';
import './CartWidgetStyle.css';

const CartWidget = () => {

    const { dark } = DarkContextUse();

    const { cart } = CartContextUse();
    const [cantCart, setCantCart] = useState(0);
    const [cerrarCompra, setCerrarCompra] = useState(false);

    const actualizarTotalCarrito = () => {
        let total = 0;

        if(cart.length != 0){
            cart.map(e => {
                total += e.cantidad;
                setCantCart(total);
            });
        } else {
            setCantCart(0);
        }
    }

    const hoverCarrito = () => {
        if(cerrarCompra){
            setCerrarCompra(false);
        } else{
            setCerrarCompra(true);
        }
    }

    useEffect(() => {

        actualizarTotalCarrito();
        
    }, [cart]);

    return (
            <button onMouseEnter={hoverCarrito}
                    onMouseLeave={hoverCarrito}
                    className={`${dark? 'dark' : 'light'} cartWidget position-relative`}>
                
                {
                cerrarCompra ?
                    <BiShoppingBag />
                    :
                    <IoMdCart />
                }
                <div 
                className={`${cerrarCompra ?
                'cantCartMiddle position-absolute translate-middle top-50 start-50'
                :
                'cantCartTop position-absolute translate-middle top-0 start-100 pt-4 pe-4'}`}>
                    {
                        cantCart ?
                        <span>{cantCart}</span>
                        :
                        <span></span>
                    }
                </div>
            </button>
    );
};

export default CartWidget;