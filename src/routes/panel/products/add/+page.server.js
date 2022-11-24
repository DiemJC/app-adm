import { fileUpload } from '$lib/client/upload';

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();

        let cover = data.get('cover');
        cover = await fileUpload(cover);
        
        console.log(cover);
    }
}