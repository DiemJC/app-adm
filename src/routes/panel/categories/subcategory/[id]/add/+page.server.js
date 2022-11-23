import { createSub } from '$lib/server/subcategory'

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const label = data.get('label');
        const category = data.get('category');
    
        const { success , message } = await createSub({label,category});

        return {
            success,
            message
        }
    }
}