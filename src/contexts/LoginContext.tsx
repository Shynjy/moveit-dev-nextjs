import { createContext, ReactNode, useState } from "react";

interface LoginContextData {
    isLogado: boolean;
    login: () => void;
    desLogin: () => void;
}

export const LoginContext = createContext({} as LoginContextData);

interface LoginProviderProps {
    children: ReactNode;
}

export default function LoginProvider({ children}: LoginProviderProps) {
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