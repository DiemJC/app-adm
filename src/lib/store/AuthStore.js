import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let init = {
    id:'',
    role:'',
    token:'',
    isAuth:false
}

const AuthStore = () => {
    const { subscribe , update } = writable(init);

    return {
        subscribe,
        login: (args) => {
            browser && localStorage.setItem('auth',JSON.stringify(args));
            update(store => (store = {...store,...args}));
        },
        refreshAuth: () => {
            let session = browser && localStorage.getItem('auth');
            if(session) update(store => (store = {...store,...JSON.parse(session)}));
        }
    }
};

export const auth = AuthStore();