import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const useCartProvide = () => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const setTotal = () => {
        if (cart.length !== 0) {
            const newTotalQuantity = cart.map((item) => item.quantity).reduce((prev, next) => prev + next);
            const newTotalPrice = cart.map((item) => item.quantity * item.price).reduce((prev, next) => prev + next);
            setTotalPrice(newTotalPrice);
            setTotalQuantity(newTotalQuantity);
        } else {
            setTotalPrice(0);
            setTotalQuantity(0);
        }
    };
    const handleAddCart = (item) => {
        const oldCart = cart.map((old) => {
            if (item.id === old.id) {
                return { ...old, quantity: old.quantity + 1 };
            }
            return old;
        });
        const checkItem = cart.find((x) => x.id === item.id);
        if (checkItem) {
            setCart(oldCart);
        } else {
            setCart((cart) => [...cart, { ...item, quantity: 1 }]);
        }
    };
    const handlePlusQuantity = (menuId) => {
        const newCart = cart.map((item) => {
            if (item.id === menuId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(newCart);
    };
    const handleMinusQuantity = (menuId) => {
        const newCart = cart
            .map((item) => {
                if (item.id === menuId) {
                    if (item.quantity > 0) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                }
                return item;
            })
            .filter((ar) => ar.quantity > 0);
        setCart(newCart);
    };
    useEffect(() => {
        setTotal();
    }, [cart]);
    return {
        cart,
        totalPrice,
        totalQuantity,
        handleAddCart,
        handleMinusQuantity,
        handlePlusQuantity
    };
};

const CartProvider = ({ children }) => {
    const state = useCartProvide();
    return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
export default CartProvider;
