import React, { useEffect, useState } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import "./ItemListContainerStyle.css";
import { DarkContextUse } from '../../Contexts/DarkContext';
import ItemList from '../ItemList/ItemList.js';
import { getFirestore } from '../../services/getFirebase.js';

const ItemListContainer = ( { ctg } ) => {

    const { dark } = DarkContextUse();

    const [stks, setStks] = useState([]);
    const [loading, setLoading] = useState(true);

    const getStickersDB = async () => {
        try {

            //Traigo la Data Base
            const db = await getFirestore();

            setTimeout(() => {

                //Consigo la coleccion stickers de la Data Base
                const stickerCollection = db.collection('stickers');

                //Filtro la coleccion por categoria seleccionada
                const filterCtg = stickerCollection.where('categoria', '==', ctg);

                if(ctg){
                    //Traigo los stickers de la categoria y los guardo en el hook stks
                    filterCtg.get().then((resp) => {

                        if(resp.size === 0){
                            console.log("No hay resultados");
                        }

                        setStks(resp.docs.map(doc => doc.data()));
                    })
                    .catch((error) => {
                        console.log("Error:",error);
                    })
                    .finally(() => {
                        setLoading(false);
                    })
                    
                } else{
                    //Ordeno por nombre
                    stickerCollection.orderBy("nombre", "asc");
                    //Traigo los stickers y los guardo en el hook stks
                    stickerCollection.get().then((resp) => {

                        if(resp.size === 0){
                            console.log("No hay resultados");
                        }

                        setStks(resp.docs.map(doc => doc.data()));
                    })
                    .catch((error) => {
                        console.log("Error:",error);
                    })
                    .finally(() => {
                        setLoading(false);
                    })
                }
      
            }, 1400);

        } catch (error) {
            console.log("Error catch:", error);
        }
    }

    useEffect(() => {

        setLoading(true);
        getStickersDB();
        
    }, [ctg]);

    return (
        <div className="col-12 col-xl-11 col-xxl-10 contenedorItemList row py-3 px-0 justify-content-around align-items-center">
            {
            loading ?
                <div className="cargando col-12">
                    <Loader
                    type="ThreeDots"
                    color={`${dark? 'white' : 'black'}`}
                    height={90}
                    width={90}
                    timeout={4000}
                    />
                </div>
                :
                stks.map(s => <ItemList key={s.id} stk={s}/>)
            }
        </div>
    );

};

export default ItemListContainer;