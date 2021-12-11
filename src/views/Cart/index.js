import { Badge, Button, Drawer, Fab, Grid, IconButton, Tooltip, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import { IconShoppingCart } from '@tabler/icons';
import { useCart } from 'hooks/useCart';
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import idr from 'utils/RupiahCurrency';
import CartItem from './CartItem';

const Cart = () => {
    const theme = useTheme();
    const { totalQuantity, cart, handlePlusQuantity, handleMinusQuantity, totalPrice } = useCart();
    const [open, setOpen] = React.useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            {/* toggle button */}

            <Tooltip title="Cart">
                <Fab
                    component="div"
                    onClick={handleToggle}
                    size="large"
                    variant="string"
                    color="secondary"
                    sx={{
                        bottom: 0,
                        m: 4,
                        position: 'fixed',
                        right: 20,
                        zIndex: (theme) => theme.zIndex.speedDial,
                        boxShadow: theme.shadows[8]
                    }}
                >
                    <IconButton color="inherit" size="large" disableRipple>
                        <Badge
                            style={{
                                position: 'absolute',
                                top: -12,
                                right: -12,
                                width: 30,
                                height: 30,
                                borderRadius: 100,
                                backgroundColor: '#5A33AA',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Typography color="white" variant="caption" align="center">
                                {totalQuantity}
                            </Typography>
                        </Badge>
                        <IconShoppingCart />
                    </IconButton>
                </Fab>
            </Tooltip>

            <Drawer
                anchor="right"
                onClose={handleToggle}
                open={open}
                PaperProps={{
                    sx: {
                        width: 350
                    }
                }}
            >
                <PerfectScrollbar component="div">
                    <Grid container sx={{ p: 1 }}>
                        <Grid item xs={12}>
                            <Typography variant="h4" style={{ marginBottom: 10 }}>
                                Cart
                            </Typography>
                        </Grid>
                        {cart.map((item) => (
                            <CartItem
                                handleMinusQuantity={() => handleMinusQuantity(item.id)}
                                handlePlusQuantity={() => handlePlusQuantity(item.id)}
                                item={item}
                            />
                        ))}
                        <Grid
                            item
                            xs={12}
                            style={{
                                position: 'fixed',
                                bottom: 0,
                                width: 350,
                                right: 0,
                                paddingLeft: 10,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                backgroundColor: 'white'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <IconShoppingCart />
                                <Typography sx={{ p: 0, m: 0 }}>{totalQuantity}</Typography>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ p: 0, m: 0 }}>{idr(totalPrice)}</Typography>
                                <Button
                                    disabled={cart.length < 1}
                                    style={{ marginLeft: 10, padding: 10, minWidth: 100 }}
                                    variant="contained"
                                >
                                    Pesan Sekarang
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </PerfectScrollbar>
            </Drawer>
        </>
    );
};

export default Cart;
