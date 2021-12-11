import React from 'react';
import { useParams } from 'react-router';

import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';
import { DarkContextUse } from '../Contexts/DarkContext';

const Categorias = () => {

    let { ctg } = useParams();
    const { dark } = DarkContextUse();

    return (
        <div style={ dark? { backgroundColor: 'black' } : { backgroundColor: 'white' }}
            className="row p-0 justify-content-center">
            <ItemListContainer ctg={ctg}/>
        </div>
    )
}

export default Categorias
