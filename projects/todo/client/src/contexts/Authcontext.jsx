import { createContext, useContext, useEffect, useState } from "react";
import { getStoredToken, removeStoredToken, setStoredToken } from "../utils/storage";
import { signinUser, signupUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const authContext = createContext();

export const useAuth = () => useContext(authContext);

export function AuthProvider ({children}) {
    const [user, setUser] = useState(0);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = getStoredToken();
        if (token) {
            setUser({token});
        }
        setLoading(false);
    }, [])

    function logout() {
        removeStoredToken();
        setUser(null);
        navigate("/login");
    }

    async function signin(cred) {
        const data = await signinUser(cred);
        setStoredToken(data.token);
        setUser({token:data.token})
        navigate("/tasks")
    }

    async function signup(cred) {
        await signupUser(cred);
        navigate("/login");
    }

    if (loading) {
        return (<div>Loading...</div>);
    }

    return (
        <authContext.Provider value={{user, logout, signin, signup}} >
            {children}
        </authContext.Provider>
    );
}