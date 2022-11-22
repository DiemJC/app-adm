import { get } from 'svelte/store';
import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { auth } from '$lib/store';

export const load = async ({fetch}) => {
    const session = browser && localStorage.getItem('auth');

    if(session) browser && auth.refreshAuth();
    
    if(!session) browser && goto('/');

    const response = await fetch('http://localhost:3001/pub/brand/list');
    const data = await response.json();
    const { success , docs } = data;

    if(!success) return {
        error:true
    }

    let size = docs ? docs.length : 0;
    return {
        success,
        docs,
        size
    }
}