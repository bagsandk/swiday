import { Button, Grid } from '@material-ui/core';
// material-ui
import { makeStyles } from '@material-ui/styles';
import Apple from 'assets/images/icons/apple.svg';
import Google from 'assets/images/icons/social-google.svg';
import { useAuth } from 'auth/authContext';
import React from 'react';
import { useNavigate } from 'react-router';
import AnimateButton from 'ui-component/extended/AnimateButton';

// style constant
const useStyles = makeStyles((theme) => ({
    redButton: {
        fontSize: '1rem',
        fontWeight: 500,
        backgroundColor: theme.palette.grey[50],
        border: '1px solid',
        borderColor: theme.palette.grey[100],
        color: theme.palette.grey[700],
        textTransform: 'none',
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.875rem'
        }
    },
    signDivider: {
        flexGrow: 1
    },
    signText: {
        cursor: 'unset',
        margin: theme.spacing(2),
        padding: '5px 56px',
        borderColor: `${theme.palette.grey[100]} !important`,
        color: `${theme.palette.grey[900]}!important`,
        fontWeight: 500
    },
    loginIcon: {
        marginRight: '16px',
        [theme.breakpoints.down('sm')]: {
            marginRight: '8px'
        }
    },
    loginInput: {
        ...theme.typography.customInput
    }
}));

//= ===========================|| FIREBASE - LOGIN ||============================//

const FirebaseLogin = (props, { ...others }) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(window.location.search);
    const redirect = queryParams.get('redirect') || '/';

    const { signInWithGoogle } = useAuth();
    const googleHandler = async () => {
        signInWithGoogle(() => {
            navigate(redirect);
        });
    };
    const appleHandler = async () => {
        console.error('Login');
    };

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12}>
                    <AnimateButton>
                        <Button
                            disableElevation
                            fullWidth
                            className={classes.redButton}
                            onClick={googleHandler}
                            size="large"
                            variant="contained"
                        >
                            <img src={Google} alt="google" width="20px" className={classes.loginIcon} /> Sign in with Google
                        </Button>
                    </AnimateButton>
                </Grid>
                <Grid item xs={12}>
                    <AnimateButton>
                        <Button
                            disableElevation
                            fullWidth
                            className={classes.redButton}
                            onClick={appleHandler}
                            size="large"
                            variant="contained"
                        >
                            <img src={Apple} alt="google" width="25px" className={classes.loginIcon} /> Sign in with Apple
                        </Button>
                    </AnimateButton>
                </Grid>
            </Grid>
        </>
    );
};

export default FirebaseLogin;
