import React, { useEffect, useState } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import { getFirestore } from '../../services/getFirebase';
import { DarkContextUse } from '../../Contexts/DarkContext';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainerStyle.css';

const ItemDetailContainer = ({ id }) => {

    const { dark } = DarkContextUse();
    
    const [stk, setStk] = useState([]);
    const [loading, setLoading] = useState(true);

    const getStickersDB = async () => {
        try {

            //Traigo la Data Base
            const db = await getFirestore();

            setTimeout(() => {

                //Consigo el sticker seleccionado de la Data Base
                const stickerSelect = db.collection('stickers').doc(id);

                //Traigo el sticker Seleccionado
                stickerSelect.get()
                .then((doc) => {

                    if(!doc.exists){
                        console.log('No existe sticker con ese id');
                        return
                    }

                    setStk({ id: doc.id, ...doc.data() });

                })
                .catch((error) => {
                    console.log('Error buscando stickers:', error);

                })
                .finally(() => {
                    setLoading(false);
                })

            }, 1700);

        } catch (error) {
            console.log('Error en la funcion:', error);
        }
    };

    useEffect(() => {

        getStickersDB();

    },[]);

    return (
        <div className="col-12 col-lg-10 col-xl-8 col-xxl-6 contenedorItemDetail py-5 justify-content-evenly align-items-center">
            {
            loading ?
                <div className="cargando">
                    <Loader
                    type="Rings"
                    color={`${dark? 'white' : 'black'}`}
                    height={130}
                    width={130}
                    timeout={4000}
                    />
                </div>
                :
                <div className="row p-0 justify-content-center">
                    <ItemDetail stk={stk}/>
                </div>
            }
        </div>
    )
}

export default ItemDetailContainer