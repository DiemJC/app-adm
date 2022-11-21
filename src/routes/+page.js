import { get } from 'svelte/store';
import { browser } from '$app/environment';
import { auth } from '$lib/store';

export const load = ({}) => {
    const session = browser && localStorage.getItem('auth');

    if(session) {
        console.log({session:true});
        browser && auth.refreshAuth();
    }

    const sessionStored = get(auth);

    if(sessionStored.isAuth) console.log('Has a session');
}