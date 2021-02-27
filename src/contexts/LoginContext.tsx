import React, { createContext, ReactNode, useState } from "react";

import { useAuth } from '../contexts/auth'
import firebaseClient from '../../firebaseClient';
import firebase from 'firebase/app';
import 'firebase/auth';

interface LoginContextData {
    isLogado: boolean;
    login: () => void;
    desLogin: () => void;
}

export const LoginContext = createContext({} as LoginContextData);

interface LoginProviderProps {
    children: ReactNode;
}

export default function LoginProvider({ children }: LoginProviderProps) {
    firebaseClient();
    
    const provider = new firebase.auth.GithubAuthProvider();

    const [isLogado, setIsLogado] = useState(false); 

    function login() {
        setIsLogado(true);
    }

    function desLogin() {
        setIsLogado(false);
    }

    return (
        <LoginContext.Provider value={{
            isLogado,
            login,
            desLogin
        }}>
            { !isLogado && children }
        </LoginContext.Provider>
    )
}