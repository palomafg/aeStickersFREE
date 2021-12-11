import React from 'react';
import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';
import { GoDesktopDownload } from 'react-icons/go';

import { DarkContextUse } from '../../Contexts/DarkContext';
import './ItemDetailStyle.css';

const ItemDetail = ({ stk }) => {

    const {sticker, nombre, descripcion} = stk;

    const { dark } = DarkContextUse();

    const downloadImage = () => {
        saveAs(sticker, `${nombre}.png`);
    }

    return (
        <div className="detalle col-11 col-md-10 col-xl-8 col-xxl-6 row p-0 py-xxl-5">
            <div className={`${dark? 'dark' : 'light'} goHome col-12 mb-3 p-0 row`}>
                <Link to="/aeStickersFREE/" className="col-1 p-0 ms-auto text-decoration-none">
                    <CgClose/>
                </Link>
            </div>
            <div className="stkDetail col-12 row p-0 justify-content-evenly align-items-center">

                <div className="stkDetail__img col-8 mb-2 mx-2">
                    <img src={sticker} className="img-fluid" alt="sticker" />
                </div>
                
                <div className="stkDetail__info col-11 mt-1">
                    <h4 className={`${dark? 'dark' : 'light'} info__nombre my-1`}>
                        {nombre}
                    </h4>
                    <p className={`${dark? 'dark' : 'light'} info__desc my-3 ps-2`}>
                        {descripcion}
                    </p>
                </div>

                <button onClick={downloadImage} className={`${dark? 'cartDark' : 'cartLight'} btn__cart my-4 p-1`}>
                    <GoDesktopDownload/>
                </button>

            </div>
        </div>
    )
}

export default ItemDetail
