import React, { useEffect, useState } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

import { getFirestore } from '../../services/getFirebase';
import { DarkContextUse } from '../../Contexts/DarkContext';
import Ticket from '../Ticket/Ticket';
import './BuyCompleteStyle.css'

const BuyComplete = ({ ordenId }) => {

    const [compra, setCompra] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const { dark } = DarkContextUse();

    const getOrderDB = async () => {
        try {

            //Traigo la Data Base
            const db = await getFirestore();

            setTimeout(() => {

                //Referencio la orden de la Data Base
                const orderMade = db.collection('ordenes').doc(ordenId);

                //Traigo la orden
                orderMade.get()
                .then((doc) => {

                    if(!doc.exists){
                        console.log('No existe orden con ese id');
                        return
                    }

                    setCompra({ id: doc.id, ...doc.data() });

                })
                .catch((error) => {
                    console.log('Error buscando orden:', error);

                })
                .finally(() => {
                    setLoaded(true);
                })
            }, 1000);

        } catch (error) {
            console.log('Error en la funcion:', error);
        }
    };

    useEffect(() => {
        
        getOrderDB();

    }, []);

    return (
        <div className="contenedorBuyComplete">
            {
                loaded ?
                    <div className="row justify-content-center">
                        <Ticket compra={compra} ordenId={ordenId} />
                    </div>
                    :
                    <div className="cargando">
                        <Loader
                        type="TailSpin"
                        color={`${dark? 'white' : 'black'}`}
                        height={100}
                        width={100}
                        timeout={50000}
                        />
                    </div>
            }

        </div>
    )
}

export default BuyComplete
