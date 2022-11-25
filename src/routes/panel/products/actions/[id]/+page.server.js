import { fileUpload } from '$lib/client/upload';
import { updateProduct } from '$lib/server/product';

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        //Agregar script en api para almacenar imagenes basura para eliminar
        let id = data.get('id');
        let prev = data.get('prev');
        let cover = data.get('cover');
        let image = data.get('image');
        console.log(image);
        if(image === 'true') cover = await fileUpload(cover);
        if(image === 'false') cover = prev;
        const body = Object.fromEntries(data);
        body.cover = cover;

        const { success , message } = await updateProduct(body,id);
        
        return {
            success,
            message
        }
    }
}