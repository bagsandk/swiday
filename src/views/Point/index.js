import { useTheme } from '@emotion/react';
import { Button, Card, CardContent, Grid, Skeleton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { IconTrophy } from '@tabler/icons';
import useMe from 'hooks/useMe';
import React from 'react';
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import Loader from 'ui-component/Loader';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: '475px',
        '& > *': {
            flexGrow: 1,
            flexBasis: '50%'
        },
        [theme.breakpoints.down('sm')]: {
            margin: '20px'
        },
        [theme.breakpoints.down('lg')]: {
            maxWidth: '400px'
        }
    },
    content: {
        padding: `${theme.spacing(5)} !important`,
        [theme.breakpoints.down('lg')]: {
            padding: `${theme.spacing(3)} !important`
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        display: 'flex',
        minHeight: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    }
}));

export default function Point() {
    const classes = useStyles();
    const theme = useTheme();
    const { me, loading } = useMe();
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
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
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <Typography>Point</Typography>
                                        {loading ? (
                                            <Skeleton variant="rect" width={100} height={44} />
                                        ) : (
                                            <Typography style={{ border: '1px solid green', padding: 10, borderRadius: 5 }} variant="h2">
                                                {me.userPoint}
                                            </Typography>
                                        )}
                                    </div>
                                    <IconTrophy size="50" />
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
