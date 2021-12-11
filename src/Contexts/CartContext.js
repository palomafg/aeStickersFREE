import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartContextUse = () => {
    return useContext(CartContext)
}

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (sticker,cantidad) => {

        if (isInCart(sticker.id)) {

            const updateCant = [...cart];

            updateCant.map(e => {
                if(e.sticker.id === sticker.id){
                    e.cantidad += cantidad;
                }
            });

            setCart(updateCant);

        } else {
            setCart([...cart, {sticker, cantidad}]);
        }
    }

    const isInCart = (id) => cart.find(e => e.sticker.id === id)

    const clear = () => setCart([]);

    const removeSticker = (id) => {
        const cartFilter = cart.filter(e => e.sticker.id !== id);
        setCart(cartFilter);
    }

    return(
        <CartContext.Provider value={{cart, addItem, clear, removeSticker}}>
            {children}
        </CartContext.Provider>
    );
}