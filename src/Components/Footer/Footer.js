import React from 'react';

import './FooterStyle.css';
import logoMin__white from '../../multimedia/logoMin__white.svg';
import logoMin__black from '../../multimedia/logoMin__black.svg';
import { DarkContextUse } from '../../Contexts/DarkContext';

const Footer = () => {

    const { dark } = DarkContextUse();

    return (
        <div className={`${dark? 'footerDark' : 'footerLight'} col-12 row p-0 pb-2 px-md-3 justify-content-center`}>

            <div className="col-12 col-lg-10 col-xl-8 col-xxl-10 row m-0 p-0">
                <div className="col-5 col-xl-4 mt-5 ms-4 me-auto logoFooter">
                    <img className="logoFooter__img" src={dark? logoMin__black : logoMin__white} alt="logo"/>
                </div>

                <div className={`${dark? 'credDark' : 'credLight'} creditos col-11 mt-4 mb-5 mb-md-3 ms-auto me-2`}>
                    <p className="creditos__des my-2">Desarrollado x Paloma González</p>
                    <p className="creditos__dis my-2">Diseñado x Ailín Carlés</p>
                    <p className="creditos__ano my-2">- 2021 -</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
