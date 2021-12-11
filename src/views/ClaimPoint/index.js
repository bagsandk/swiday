import { Button, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useAuth } from 'auth/authContext';
import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router';
import { GET_CHECK_POINT_CLAIM, POST_CLAIM_POINT } from 'service/point';
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

export default function ClaimPoint() {
    const classes = useStyles();
    const navigate = useNavigate();
    const { exp, code, jumlah } = useParams();
    const { data, error, isLoading } = useQuery('CHECK_POINT', () => GET_CHECK_POINT_CLAIM(exp, code, jumlah));
    const mutation = useMutation((code) => POST_CLAIM_POINT(code), {
        onSuccess: (data) => {
            console.log(data);
            if (data.data.status === 'success') {
                navigate('/point');
            }
        }
    });
    const handleLihatPoint = () => {
        navigate('/point');
    };

    const handleClaimPoint = async (code) => {
        await mutation.mutate(code);
    };

    if (isLoading) {
        return <Loader />;
    }
    const point = data && data.data;
    console.log(point);
    return (
        <div className={classes.wrapper}>
            {point.exp === false && point.claim === false && (
                <Content
                    text="Anda mendapatkan point sebesar"
                    onClick={() => handleClaimPoint(point.data.code)}
                    point={point.data.jumlah}
                    textButton="Claim Point"
                    buttonColor="warning"
                />
            )}

            {point.claim && (
                <Content
                    text="Anda sudah mendapatkan point ini"
                    point={point.data.jumlah}
                    textButton="Lihat Point"
                    buttonColor="info"
                    onClick={handleLihatPoint}
                />
            )}

            {point.exp && (
                <Content
                    text="Point sudah expire"
                    onClick={handleLihatPoint}
                    point={point.data.jumlah}
                    textButton="Lihat Point"
                    buttonColor="info"
                />
            )}

            {point.data === null && (
                <MainCard className={classes.card} contentClass={classes.content}>
                    <Typography align="center" variant="h3">
                        Point tidak ditemukan!
                    </Typography>
                    <Button variant="contained" onClick={handleLihatPoint} color="info">
                        Lihat Point
                    </Button>
                </MainCard>
            )}
        </div>
    );
}
const Content = ({ text, point, onClick, textButton, textColor, buttonColor }) => {
    const classes = useStyles();
    return (
        <MainCard className={classes.card} contentClass={classes.content}>
            <Typography align="center" variant="h3">
                {text}
            </Typography>
            <Card style={{ border: '1px solid #FFC107', padding: 30, minWidth: 300, margin: 20 }}>
                <Typography align="center" variant="h1">
                    {point}
                </Typography>
            </Card>
            <Button variant="contained" onClick={onClick} color={buttonColor}>
                {textButton}
            </Button>
        </MainCard>
    );
};
