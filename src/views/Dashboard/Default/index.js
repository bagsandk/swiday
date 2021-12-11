// material-ui
import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { gridSpacing } from 'store/constant';
import TotalIncomeLightCard from './TotalIncomeLightCard';

// ===========================|| DEFAULT DASHBOARD ||=========================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                    <TotalIncomeLightCard isLoading={isLoading} />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
