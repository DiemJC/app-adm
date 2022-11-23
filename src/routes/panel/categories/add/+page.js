export const load = async ({}) => {
    const session = browser && localStorage.getItem('auth');

    if(session) browser && auth.refreshAuth();
    
    if(!session) browser && goto('/');
    
    const response = await fetch('http://localhost:3001/pub/brand/list');

    const data = await response.json();
    const { success , docs } = data;

    let brands = docs;

    return {
        success,
        brands
    }
}