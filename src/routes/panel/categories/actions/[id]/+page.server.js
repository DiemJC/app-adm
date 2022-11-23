import { updateCategory } from '$lib/server/category'

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();

        const id = data.get('id')
        const name = data.get('name');
        const slug = data.get('slug');
    
        const { success , message } = await updateCategory({name,slug},id);

        return {
            success,
            message
        }
    }
}