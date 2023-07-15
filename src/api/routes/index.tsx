import { api } from ".."

export const register = async (
    username: string,
    password: string,
) => {
   api.post('auth/register',{
    username,
    password,
   })
}

export const login = async (
    username: string,
    password: string,
) => {
    api.post('auth/login',{
        username,
        password,
       })
}

