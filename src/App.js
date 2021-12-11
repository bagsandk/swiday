import React from 'react';
import { useSelector } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, StyledEngineProvider } from '@material-ui/core';

// routing
import Routes from './routes';

// defaultTheme
import themes from './themes';

// project imports
import NavigationScroll from './layout/NavigationScroll';
import AuthProvider from 'auth/authContext';
import CartProvider from 'hooks/useCart';
import { QueryClient, QueryClientProvider } from 'react-query';

// ===========================|| APP ||=========================== //

const App = () => {
    const customization = useSelector((state) => state.customization);
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <StyledEngineProvider injectFirst>
                    <CartProvider>
                        <ThemeProvider theme={themes(customization)}>
                            <CssBaseline />
                            <NavigationScroll>
                                <Routes />
                            </NavigationScroll>
                        </ThemeProvider>
                    </CartProvider>
                </StyledEngineProvider>
            </AuthProvider>
        </QueryClientProvider>
    );
};

export default App;
