import React from 'react';
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';

import logoBlack from '../../multimedia/logoBlack.svg';
import ticketTop from '../../multimedia/ticketTop.svg';
import ticketBottom from '../../multimedia/ticketBottom.svg';
import './TicketStyle.css'

const Ticket = ({ compra, ordenId }) => {

    const { buyer, fecha, stickers, totalCompra } = compra;

    return (
        <div className="col-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 ticket row py-3 my-3 my-md-5 position-relative justify-content-center">
            <div className="corteTop col-12 px-0 position-absolute translate-middle">
                <img className="corte__svg" src={ticketTop} alt="ticketTop"/>
            </div>

            <div className="col-11 mt-4 row">
                <Link to="/aeStickers/" className="cerrar col-1 p-0 ms-auto text-decoration-none">
                    <CgClose/>
                </Link>
            </div>

            <div className="col-10 col-sm-10 col-lg-8 col-xxl-7 my-4">
                <img className="img-fluid" src={logoBlack} alt="logo"/>
            </div>

            <h1 className="col-11 mt-3 tuCompra text-center">TU COMPRA</h1>

            <div className="col-11 px-3 mt-3">
                <p className="my-1 ordenIdLabel">ORDEN:</p>
                <p className="my-1 ordenId">{ordenId}</p>
                <p className="my-2 fecha">{fecha.toDate().toLocaleString()}</p>
            </div>

            <div className="col-11 mt-3 px-3 encabezado d-flex justify-content-between">
                <span>CANT.</span>
                <span>STICKER</span>
                <span>PRECIO</span>
            </div>

            <div className="col-11 mt-2 mb-4 px-3">
                {
                    stickers.map( (stk) => {
                        const { cantidad, sticker } = stk;

                        return(
                            <div key={sticker.id} className="itemComprado my-1 d-flex justify-content-between">
                                <span>{cantidad}</span>
                                <span>{sticker.nombre}</span>
                                <span>${sticker.precio}</span>
                            </div>
                        )
                    })
                }
            </div>

            <div className="col-11 my-2 px-3 text-end">
                <span className="totalLabel mx-1">TOTAL:</span>
                <span className="total mx-1">${totalCompra}</span>
            </div>

            <div className="col-11 my-3 px-3">
                <p className="datosLabel">DATOS DE COMPRA:</p>
                <p className="datos"><AiOutlineUser/> {buyer.nombre} {buyer.apellido}</p>
                <p className="datos"><AiOutlineMail/> {buyer.email}</p>
                <p className="datos"><AiOutlinePhone/> {buyer.telefono}</p>
            </div>

            <div className="corteBottom col-12 px-0 position-absolute translate-middle">
                <img className="corte__svg" src={ticketBottom} alt="ticketBottom"/>
            </div>
        </div>
    )
}

export default Ticket
