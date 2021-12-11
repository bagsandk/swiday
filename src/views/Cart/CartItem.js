import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import { IconMinus, IconPlus } from '@tabler/icons';
import React from 'react';
import idr from 'utils/RupiahCurrency';

const CartItem = ({ item, handleMinusQuantity, handlePlusQuantity }) => {
    const theme = useTheme();
    return (
        <Grid item xs={12}>
            <Card
                style={{
                    borderTop: '1px solid',
                    borderRadius: 0
                }}
            >
                <CardContent style={{ padding: 5, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <Grid container spacing={1}>
                        <Grid item xs={2} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                            <CardMedia sx={{ width: 50 }} component="img" image="https://via.placeholder.com/150" alt="green iguana" />
                        </Grid>
                        <Grid item xs={7}>
                            <Typography variant="h6" component="div">
                                {item.menuName}
                            </Typography>
                            <Typography variant="caption">{item.menuDesc}</Typography>
                            <Typography variant="subtitle2" color="black">
                                {idr(item.price)}
                            </Typography>
                        </Grid>
                        <Grid item xs={3} style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                            <Button onClick={handleMinusQuantity} size="small" style={{ padding: 2, minWidth: 0 }} variant="outlined">
                                <IconMinus size="14" />
                            </Button>
                            <Typography style={{ margin: 5 }}>{item.quantity}</Typography>
                            <Button onClick={handlePlusQuantity} size="small" style={{ padding: 2, minWidth: 0 }} variant="outlined">
                                <IconPlus size="14" />
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default CartItem;
