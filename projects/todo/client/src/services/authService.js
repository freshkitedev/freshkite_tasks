import api from "./api";

export const signinUser = (cred) => {
    return api.post('/auth/login', cred);
}

export const signupUser = async (cred) => {
    return await api.post('/auth/register', cred);
}