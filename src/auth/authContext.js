import { googleProvider } from 'config/authMedia';
import React, { createContext, useContext, useState } from 'react';
import firebaseMediaAuth from 'service/firebaseMediaAuth';
import { getAuth, signOut } from '@firebase/auth';

const AuthContext = createContext();

function useProvideAuth() {
    const [isLogin, setIsLogin] = useState();
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));

    const signInWithGoogle = async (callback) => {
        try {
            const res = await firebaseMediaAuth(googleProvider);
            console.log(res);
            await localStorage.setItem('accessToken', res.user.accessToken);
            console.log(localStorage.getItem('accessToken'));
            setAccessToken(res.user.accessToken);
            setIsLogin(true);
            callback();
        } catch (e) {
            await localStorage.removeItem('accessToken');
            setAccessToken(null);
            setIsLogin(false);
            console.log(e);
        }
    };

    const logout = (callback) => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                localStorage.removeItem('accessToken');
                setAccessToken(null);
                setIsLogin(false);
                callback();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return {
        isLogin,
        signInWithGoogle,
        logout,
        accessToken
    };
}

function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}

export default AuthProvider;
