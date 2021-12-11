import { useTheme } from '@emotion/react';
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import idr from 'utils/RupiahCurrency';

export default function MenuItem({ item, handleAddCart }) {
    const theme = useTheme();
    return (
        <Card
            sx={{
                border: '1px solid',
                borderColor: theme.palette.primary.light,
                ':hover': {
                    boxShadow: '0 2px 14px 0 rgb(32 40 45 / 12%)'
                }
            }}
        >
            <CardContent style={{ padding: 15 }}>
                <Grid container spacing={1}>
                    <Grid item xs={10} style={{ display: 'flex', alignItems: 'center' }}>
                        <CardMedia
                            sx={{ width: 60, marginRight: 1.5 }}
                            component="img"
                            image="https://via.placeholder.com/150"
                            alt="green iguana"
                        />
                        <Grid item md={8} xs={8}>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.menuName}
                            </Typography>
                            <Grid style={{ overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
                                <Typography noWrap variant="caption">
                                    {item.menuDesc}
                                </Typography>
                            </Grid>
                            <Typography color="black">{idr(item.price)}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                        <Button onClick={handleAddCart} variant="outlined" color="success">
                            Tambah
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
