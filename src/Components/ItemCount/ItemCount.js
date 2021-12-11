import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from 'react-icons/md';

import { DarkContextUse } from '../../Contexts/DarkContext';
import './ItemCountStyle.css'

const ItemCount = ({onBuy, initial, stock}) => {

    const { dark } = DarkContextUse();

    const [qty,setQty] = useState(initial);
    const [endBuy, setEndBuy] = useState(false);

    const rmvItem = () => {
        if(qty > initial){
            setQty(qty - 1);
        }
    };

    const addItem = () => {
        if(qty < stock){
            setQty(qty + 1);
        }
    };

    const comprar = () => {
        if(qty <= stock){
            // alert(`Te llevas ${qty} items!`);
            onBuy(qty);
            setQty(initial);
            setEndBuy(true);

        } else{
            alert("Lo sentimos, ya no quedan más :(");
        }
        
    };

    return (
        <>
            <div className="counter col-12 d-flex justify-content-center">
                <button id={`${dark? 'btnDark' : 'btnLight'}`}
                        className="counter__btn pb-1"
                        onClick={() => rmvItem()}> - </button>
                <p className={`${dark? 'dark' : 'light'} counter__qty my-2 mx-4`}>
                     {qty} </p>
                <button id={`${dark? 'btnDark' : 'btnLight'}`}
                        className="counter__btn pb-1"
                        onClick={() => addItem()}> + </button>
            </div>

            <div className="col-12 row justify-content-center">
                <button className={`${dark? 'cartDark' : 'cartLight'} btn__cart`}
                        onClick={comprar}>
                    <MdAddShoppingCart/>
                </button>
            {
            endBuy ?
                <Link className="col-12 mt-3 d-flex justify-content-center text-decoration-none" to="/aeStickers/carrito">
                    <button className={`${dark? 'verDark' : 'verLight'} ver__cart`}> 
                        IR AL CARRITO </button>
                </Link>
                :
                <div></div>
            }
            </div>
        </>
    )
}

export default ItemCount