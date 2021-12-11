import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ stk }) => {

    const {id, sticker, nombre, precio} = stk;

    return (
        <Item id={id} sticker={sticker} nombre={nombre} precio={precio} />
    )
}

export default ItemList
