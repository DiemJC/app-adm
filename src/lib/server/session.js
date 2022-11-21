import { env } from '$env/dynamic/private';
import client from 'socket.io-client';

const apidir = env.API_URL;

const socket = client(apidir);
const io = socket;

export const signIn = async ({email,password}) => {
    try {
        const response = await fetch(`${apidir}/signin`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            mode:'cors',
            body:JSON.stringify({email,password})
        });
        const data = await response.json();
        io.on('connect',() => console.log(io.connected));
        return data;
    } catch (error) {
        return error;
    }
}