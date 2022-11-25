import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { auth } from '$lib/store';

export const load = async ({ params , fetch }) => {
    const session = browser && localStorage.getItem('auth');

    if(session) browser && auth.refreshAuth();
    
    if(!session) browser && goto('/');

    const response = await fetch(`http://localhost:3001/pub/product/${params.id}`);
    const brandsResponse = await fetch('http://localhost:3001/pub/brand/list');
    const categoriesResponse = await fetch('http://localhost:3001/pub/category/list');
    const subsResponse = await fetch('http://localhost:3001/pub/sub/list');

    const brandsData = await brandsResponse.json();
    const categoriesData = await categoriesResponse.json();
    const subsData = await subsResponse.json();

    let brands;
    let categories;
    let subs;

    if(brandsData.success) brands = brandsData.docs;
    if(categoriesData.success) categories = categoriesData.docs;
    if(subsData.success) subs = subsData.docs;

    const data = await response.json();
    
    const { success , doc } = data;

    if(!success) return {
        error:true
    }

    return {
        success,
        doc,
        brands,
        categories,
        subs
    }
}