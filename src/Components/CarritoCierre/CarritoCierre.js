import React from 'react';
import { useEffect, useState } from 'react';
import { CgTrash } from 'react-icons/cg';

import { CartContextUse } from '../../Contexts/CartContext';
import { DarkContextUse } from '../../Contexts/DarkContext';
import './CarritoCierreStyle.css'

const CarritoCierre = () => {

    const { clear, removeSticker, cart } = CartContextUse();
    const [totalPrecio, setTotalPrecio] = useState(0);

    const { dark } = DarkContextUse();

    const actualizarTotalPrecio = () => {
        let total = 0;
        cart.map(e => {
            total = total + (e.cantidad * e.sticker.precio);
            setTotalPrecio(total);
        });
    }

    useEffect(() => {

        actualizarTotalPrecio();
        
    }, [cart]);

    return (
        <div className="carritoCierre col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7 row p-1 justify-content-center">

            <div className="col-12 row p-0 justify-content-start">
                <button className={`${dark? 'vaciarDark' : 'vaciarLight'} col-2 my-3 ms-3 p-1 pb-2 vaciarCarrito`}
                        onClick={clear}> <CgTrash/> </button>
            </div>

            {cart.map(e => {
                const {sticker, nombre, precio, id} = e.sticker;
                return(
                    <div key={id} className="item col-5 col-md-3 row m-2 m-md-4 p-1">
                        <div className="col-3 ms-auto p-0">
                            <button onClick={() => removeSticker(id)}
                                    type="button"
                                    className={`${dark? 'dark' : 'light'} borrarStk`}
                                    aria-label="Remove"> X </button>
                        </div>
                        
                        <div className="col-12 my-2">
                            <img className="img-fluid" src={sticker} alt="sticker"/>
                        </div>
                        
                        <div className="col-12 my-2">
                            <h5 className={`${dark? 'dark' : 'light'} itemNombre`}>
                                {nombre}
                            </h5>
                            <h6 className={`${dark? 'dark' : 'light'} itemPrecio`}>
                                ${precio}
                            </h6>
                            <span className={`${dark? 'dark' : 'light'} itemCantidad`}>
                                Llevás {e.cantidad}
                            </span>
                        </div>
                    </div>
                )
            })}

            <div className="col-10 my-3 text-end">
                <h4 className={`${dark? 'dark' : 'light'} totalPrecio`}>
                    Total ${totalPrecio}
                </h4>
            </div>
        </div>
    )
}

export default CarritoCierre
