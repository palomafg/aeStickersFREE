import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { DarkContextUse } from '../../Contexts/DarkContext';
import './NoItemsStyle.css'

const NoItems = () => {

    const { dark } = DarkContextUse();

    return (
        <div className="contenedorNoItems col-10 col-sm-8 p-0 pb-5 row justify-content-center align-items-start">

            <h4 className={`${dark? 'dark' : 'light'} noHay col-12 mt-5 text-center`}>
                NO HAY STICKERS AGREGADOS
            </h4>

            <Carousel className="col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 m-0" fade controls={false} indicators={false}>
                <Carousel.Item interval={1300}>
                    <img
                    className="img-fluid rounded-circle"
                    src="https://res.cloudinary.com/dd2nenune/image/upload/v1635719762/aeStickers/selfies/selfieChico-14_llursj.jpg"
                    alt="storie de persona usando nuestros stickers 1"
                    />
                </Carousel.Item>

                <Carousel.Item interval={1300}>
                    <img
                    className="img-fluid rounded-circle"
                    src="https://res.cloudinary.com/dd2nenune/image/upload/v1635719762/aeStickers/selfies/selfieRubia-14_ozuqj7.jpg"
                    alt="storie de persona usando nuestros stickers 2"
                    />
                </Carousel.Item>

                <Carousel.Item interval={1300}>
                    <img
                    className="img-fluid rounded-circle"
                    src="https://res.cloudinary.com/dd2nenune/image/upload/v1635719762/aeStickers/selfies/selfieHipster-14_nbzwsw.jpg"
                    alt="storie de persona usando nuestros stickers 3"
                    />
                </Carousel.Item>

                <Carousel.Item interval={1300}>
                    <img
                    className="img-fluid rounded-circle"
                    src="https://res.cloudinary.com/dd2nenune/image/upload/v1635719762/aeStickers/selfies/selfieGorrita-14_jcqczq.jpg"
                    alt="storie de persona usando nuestros stickers 4"
                    />
                </Carousel.Item>
            </Carousel>

            <h6 className={`${dark? 'dark' : 'light'} verColeccion col-12 m-0 text-center`}>
                Querés ver nuestra colección?
            </h6>

            <div className="col-12 mb-5 text-center">
                <Link to="/aeStickers/">
                    <button className={`${dark? 'btnDark' : 'btnLight'} irHome__btn`}>
                        VER STICKERS</button>
                </Link>
            </div>

        </div>
    )
}

export default NoItems
