import { createContext, useContext, useEffect, useState } from "react";
import { getStoredToken, removeStoredToken, setStoredToken } from "../utils/storage";

const authContext = createContext();

export const useAuth = () => useContext(authContext);

export function AuthProvider ({children}) {
    const [user, setUser] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = getStoredToken();
        if (token) {
            setUser(token);
        }
        setLoading(false);
    }, [])

    function logout() {
        removeStoredToken();
        setUser(null);
    }

    if (loading) {
        return (<div>Loading...</div>);
    }

    return (
        <authContext.Provider value={{user, logout}} >
            {children}
        </authContext.Provider>
    );
}