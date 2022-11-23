import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { auth } from '$lib/store';

export const load = async ({fetch}) => {
    const session = browser && localStorage.getItem('auth');

    if(session) browser && auth.refreshAuth();
    
    if(!session) browser && goto('/');

    const parents = await fetch('http://localhost:3001/pub/category/list');
    const categories = await parents.json();

    const response = await fetch('http://localhost:3001/pub/sub/list');
    const data = await response.json();

    const { success , docs } = data;

    if(!success) return {error:true}

    let size = categories.docs ? categories.docs.length : 0;

    return {
        success,
        docs,
        categories:categories.docs,
        size
    }
}