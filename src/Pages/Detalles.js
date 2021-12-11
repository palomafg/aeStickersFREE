import React from 'react';
import { useParams } from 'react-router';

import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer';
import { DarkContextUse } from '../Contexts/DarkContext';

const Detalles = () => {

    let { id } = useParams();
    const { dark } = DarkContextUse();

    return (
        <div style={ dark? { backgroundColor: 'black' } : { backgroundColor: 'white' }}
            className="row p-0 justify-content-center">
            <ItemDetailContainer id={id} />
        </div>
    )
}

export default Detalles
