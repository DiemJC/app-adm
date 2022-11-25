import { fileUpload } from '$lib/client/upload';
import { createProduct } from '$lib/server/product';

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();

        let cover = data.get('cover');
        cover = await fileUpload(cover);
        const body = Object.fromEntries(data);
        body.cover = cover;

        const response = await createProduct(body);
        
        console.log(response);
    }
}