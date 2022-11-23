import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { auth } from '$lib/store';

export const load = async ({fetch}) => {
    const session = browser && localStorage.getItem('auth');

    if(session) browser && auth.refreshAuth();
    
    if(!session) browser && goto('/');

    const response = await fetch('http://localhost:3001/pub/category/list'); //brand - category - product
    const data = await response.json(); // Esperar respuesta del back y convertir en json
    const { success , docs } = data; //Respuesta del back

    if(!success) return {error:true}

    let size = docs ? docs.length : 0; //Devuelve la cantidad de documentos obtenidos

    return {
        success,
        docs,
        size
    }
}