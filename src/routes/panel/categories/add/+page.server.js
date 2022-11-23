import { createCategory } from '$lib/server/category'

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();

        const brand = data.get('brand');
        const name = data.get('name');
        const slug = data.get('slug');

        const id = `${brand}-${name}`;
    
        const { success , message } = await createCategory({id,brand,name,slug});

        return {
            success,
            message
        }
    }
}