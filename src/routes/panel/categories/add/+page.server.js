import { createCategory } from '$lib/server/category'

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const name = data.get('name');
        const slug = data.get('slug');
    
        const { success , message } = await createCategory({name,slug});

        return {
            success,
            message
        }
    }
}