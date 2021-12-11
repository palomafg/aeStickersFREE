import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineDownload } from 'react-icons/hi';

import { DarkContextUse } from '../../Contexts/DarkContext';
import './ItemStyle.css';

const Item = ({ id, sticker, nombre, precio }) => {

    const { dark } = DarkContextUse();

    return (
        <div className={`${dark? 'dark' : 'light'} sticker col-6 col-sm-5 col-lg-3 col-xxl-2 mx-sm-3 mx-xl-4 my-4 p-0 p-sm-3 row justify-content-center`}>
            <img src={sticker} alt="sticker" className="col-12 sticker__img img-fluid p-2 my-1"/>
            <h5 className="col-12 sticker__nombre my-3">{nombre}</h5>
            <Link className="col-5 col-sm-6 col-md-5 col-lg-6 col-xl-5 col-xxl-8 my-2 my-md-3 my-xl-4 mx-auto p-0 text-decoration-none" to={`/aeStickersFREE/detalles/${id}`}>
                <button className={`${dark? 'btnDark' : 'btnLight'} sticker__usar`}>
                    USAR <HiOutlineDownload/>
                </button>
            </Link>
        </div>
    );

};

export default Item;