import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { auth } from '$lib/store';

export const load = async ({ params , fetch }) => {
    const session = browser && localStorage.getItem('auth');

    if(session) browser && auth.refreshAuth();
    
    if(!session) browser && goto('/');

    const response = await fetch(`http://localhost:3001/pub/sub/list/${params.id}`);

    const data = await response.json();
    
    const { success , docs } = data;

    if(!success) return {
        error:true
    }

    return {
        success,
        docs
    }
}