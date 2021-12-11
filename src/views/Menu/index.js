import { Grid, Typography } from '@material-ui/core';
import { useCart } from 'hooks/useCart';
import React from 'react';
import { gridSpacing } from 'store/constant';
import Cart from 'views/Cart';
import MenuItem from './MenuItem';

const dummyData = [
    {
        id: 1,
        menuName: 'Ayam goreng',
        menuDesc: 'Ayam goreng kampung jantan srgdg awert a',
        price: 10000,
        picture: '',
        categoryId: 1,
        categoryName: 'Makanan'
    },
    {
        id: 2,
        menuName: 'Ayam bakar',
        menuDesc: 'Ayam bakar kampung',
        price: 10000,
        picture: '',
        categoryId: 1,
        categoryName: 'Makanan'
    },
    {
        id: 3,
        menuName: 'Lele goreng',
        menuDesc: 'Lele segar',
        price: 10000,
        picture: '',
        categoryId: 1,
        categoryName: 'Makanan'
    },
    {
        id: 4,
        menuName: 'Es teh',
        menuDesc: 'Es teh tubruk',
        price: 5000,
        picture: '',
        categoryId: 2,
        categoryName: 'Minuman'
    },
    {
        id: 5,
        menuName: 'Es Jeruk',
        menuDesc: '-',
        price: 7000,
        picture: '',
        categoryId: 2,
        categoryName: 'Minuman'
    }
];
export default function FoodMenu() {
    const { handleAddCart, cart, totalQuantity } = useCart();
    return (
        <>
            <Typography variant="h3">Makanan</Typography>
            <Grid container style={{ marginTop: 0.5 }} spacing={1}>
                {dummyData.map((item) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <MenuItem handleAddCart={() => handleAddCart(item)} item={item} />
                    </Grid>
                ))}
            </Grid>
            <Cart />
        </>
    );
}
