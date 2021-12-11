import React from 'react';

import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';
import { DarkContextUse } from '../Contexts/DarkContext';

const Stickers = () => {

    const { dark } = DarkContextUse();

    return (
        <div className="row justify-content-center"
            style={ dark? { backgroundColor: 'black' } : { backgroundColor: 'white' }}>
            <ItemListContainer ctg={false}/> 
        </div>
    )
}

export default Stickers