import { Grid, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { useQuery } from 'react-query';
import { GET_QR_CLAIM_POINT } from 'service/qr';
import AuthCardWrapper from './wrapper/AuthCardWrapper';
import AuthWrapper1 from './wrapper/AuthWrapper1';

const QR = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
    const { isLoading, data } = useQuery('CLAIM_POINT', GET_QR_CLAIM_POINT);
    console.log(data);
    const qr = data && data.data.qr;
    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <img src={qr} alt="qr" />
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default QR;
